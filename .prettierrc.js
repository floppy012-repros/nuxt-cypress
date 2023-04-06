module.exports = {
    tabWidth: 4,
    printWidth: 120,
    singleQuote: true,
    semi: true,
    bracketSpacing: true,
    overrides: [
        {
            files: '*.json',
            options: {
                printWidth: 200,
            },
        },
    ],
    arrowParens: 'always',
    plugins: [],
};
