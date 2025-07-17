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
            (translations) => {
                $scope.helloWorld = translations.helloWorld;
            },
            (translationIds) => {
                $scope.helloWorld = translationIds.helloWorld;
            },
        );
    },
];
