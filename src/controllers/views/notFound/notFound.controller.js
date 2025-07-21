/**
 * Controller for the "404 Not Found" page.
 * Provides a handler to navigate the user back to the homepage.
 *
 * @param {object} $scope The controller's scope, used to bind the navigation handler to the view.
 * @param {object} $location Service used for redirecting the user.
 * @param {object} authService Service used to clear any global error state before navigating.
 */
export const notFoundController = [
    '$scope',
    '$location',
    'authService',
    ($scope, $location, authService) => {
        $scope.navigateHome = () => {
            authService.setError(null);
            $location.path('/');
        };
    },
];
