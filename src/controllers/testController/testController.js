/**
 * Controller for the test view.
 *
 * @param {object} $scope The controller's scope for data-binding.
 * @param {object} $translate The service for localization.
 */
export const TestController = [
    '$scope',
    '$translate',
    ($scope, $translate) => {
        $translate('helloWorld').then(
            (translation) => {
                $scope.helloWorld = translation;
            },
            (translationId) => {
                $scope.helloWorld = translationId;
            },
        );
    },
];
