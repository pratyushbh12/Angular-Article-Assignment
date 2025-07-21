/* This configuration applies Prettier formatting and ESLint linting to all staged `.js`, `.html` and `.css. files */
module.exports = {
    'src/**/*.{js,html}': 'eslint --fix',
    '**/*.{js,html,css,json,md}': 'prettier --write',
};
