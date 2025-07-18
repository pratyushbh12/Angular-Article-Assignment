/**
 * Controller for the main application header.
 * Manages authentication state, language selection, and a custom navigation history for the back button.
 *
 * @param {object} $scope The controller's scope for data binding.
 * @param {object} $translate Service for handling language translations and changes.
 * @param {object} $location Service for interacting with the browser's URL.
 * @param {object} authService Service for managing user authentication.
 * @param {object} $rootScope The root scope, used to listen for global location change events.
 */
export const headerCtrl = [
    '$scope',
    '$translate',
    '$location',
    'authService',
    '$rootScope',
    ($scope, $translate, $location, authService, $rootScope) => {
        $scope.loginBtnHandler = authService.login;
        $scope.logoutBtnHandler = authService.logout;
        $scope.isLoggedIn = authService.isLoggedIn;
        $scope.changeLang = $translate.use;
        $scope.isNavigatingBack = false;
        $scope.prevLocations = [];
        $scope.lang = $translate.proposedLanguage();

        $rootScope.$on('$locationChangeSuccess', (_event, newUrl, oldUrl) => {
            if ($scope.isNavigatingBack) {
                $scope.isNavigatingBack = false;
                return;
            }
            if (newUrl != oldUrl) {
                $scope.prevLocations.push(oldUrl.split('#')[1]);
            }
        });

        $scope.backClickHandler = function () {
            const oldUrl = $scope.prevLocations.pop();
            $scope.isNavigatingBack = true;
            $location.path(oldUrl);
        };
    },
];
