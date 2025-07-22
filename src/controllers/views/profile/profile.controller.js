// TODO: Replace with actual profile functionality - currently used to test error page
export const profileController = [
    '$scope',
    'authService',
    ($scope, authService) => {
        // Immediately trigger error page for testing purposes
        authService.setError('Testing Error');
    },
];
