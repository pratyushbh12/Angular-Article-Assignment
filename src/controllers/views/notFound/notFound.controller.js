export const notFoundController = [
    '$scope',
    '$location',
    ($scope, $location) => {
        $scope.navigateHome = () => {
            $location.path('/');
        };
    },
];
