/* This configuration applies Prettier formatting and ESLint linting to all staged `.ts` and `.tsx` files */
module.exports={
    'src/**/*.{js,html,css}': `eslint .`,
    '*': `prettier --write ./`,
};
