/** This configuration applies Prettier formatting,
 * ESLint linting to all staged files
 */
module.exports = {
    '*': 'eslint --fix',
    '**/*': 'prettier --write',
};
