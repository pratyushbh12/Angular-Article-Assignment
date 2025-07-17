/* This configuration applies Prettier formatting and ESLint linting to all staged `.js`, `.html` and `.css. files */
module.exports={
    'src/**/*.{js,html,css}': `eslint .`,
    '*': `prettier --write ./`,
};
