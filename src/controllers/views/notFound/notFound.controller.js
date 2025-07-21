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
