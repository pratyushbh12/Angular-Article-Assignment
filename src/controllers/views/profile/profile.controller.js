// Will modify currently used to test error page
export const profileController = [
    '$scope',
    'authService',
    ($scope, authService) => {
        authService.setError('Testing Error');
    },
];
