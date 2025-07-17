import { ENGLISH_TRANSLATION_KEYS } from '../en/en.config.js';
import { SPANISH_TRANSLATION_KEYS } from '../es/es.config.js';

/**
 * Configures the i18n settings for the application.
 *
 * @param {object} $translateProvider Provider to configure translations.
 */
export const i18nConfig=['$translateProvider', ($translateProvider)=>{
    $translateProvider.translations('en', ENGLISH_TRANSLATION_KEYS);
    $translateProvider.translations('es', SPANISH_TRANSLATION_KEYS);
    $translateProvider
        .preferredLanguage('es')
        .useSanitizeValueStrategy('escape');
},
];
