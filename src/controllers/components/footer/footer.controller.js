export const footerCtrl = [
    '$scope',
    '$translate',
    '$rootScope',
    ($scope, $translate, $rootScope) => {
        $rootScope.$on('$translateChangeSuccess', () => {
            $translate('footerText');
        });
    },
];
