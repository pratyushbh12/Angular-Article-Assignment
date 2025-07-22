/**
 * Controller for the dedicated error page.
 * This controller ensures the page is only accessible when a global error
 * is active, displays the error details, and provides a way to navigate home.
 *
 * @param {object} $scope The controller's scope for binding data to the view.
 * @param {object} $location Service for controlling the browser's URL.
 * @param {object} authService Service that manages the application's global error state.
 */
export const errorController = [
    '$scope',
    '$location',
    'authService',
    ($scope, $location, authService) => {
        if (!authService.isError()) {
            $location.path('/');
        }
        $scope.errorCode = authService.getError();
        $scope.navigateHome = () => {
            authService.clearError();
            $location.path('/');
        };
    },
];
