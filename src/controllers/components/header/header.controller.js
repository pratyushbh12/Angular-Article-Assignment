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
        $scope.isNavigatingBack = false;
        $scope.changeLang = $translate.use;
        $scope.lang = $translate.proposedLanguage();
        $scope.languages = $translate.getAvailableLanguageKeys();

        $rootScope.$on('$translateChangeSuccess', () => {
            $translate('header');
            $scope.lang = $translate.proposedLanguage();
        });

        $scope.backClickHandler = function () {
            $scope.log = true;
        };
    },
];
