export const profileController = [
    '$scope',
    'authService',
    ($scope, authService) => {
        authService.setError('Testing Error');
    },
];
