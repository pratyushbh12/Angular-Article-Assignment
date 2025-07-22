/** This configuration applies Prettier formatting,
 * ESLint linting to all staged files
 */
module.exports = {
    'src/**/*.{js,html}': 'eslint --fix',
    '**/*': 'prettier --write',
};
