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
            $location.path('/');
        };
    },
];
