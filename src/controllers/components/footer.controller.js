export const footerCtrl = [
    '$translate',
    '$rootScope',
    ($translate, $rootScope) => {
        const ctrl = this;
        $rootScope.$on('$translateChangeSuccess', () => {
            $translate('footerText').then(
                (translation) => {
                    ctrl.footerText = translation;
                },
                (translationId) => {
                    ctrl.footerText = translationId;
                },
            );
        });
    },
];
