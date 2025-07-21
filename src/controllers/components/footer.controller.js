export const footerCtrl = [
    '$translate',
    '$rootscope',
    ($translate, $rootscope) => {
        const ctrl = this;
        $rootscope.on('$translateChangeSuccess', () => {
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
