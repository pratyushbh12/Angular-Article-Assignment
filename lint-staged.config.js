/** This configuration applies Prettier formatting,
 * ESLint linting to all staged `.js`, `.html` and `.css. files
 */
module.exports = {
    '*': 'eslint --fix',
    '**/*': 'prettier --write',
};
