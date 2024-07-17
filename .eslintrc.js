module.exports = {

    parser: '@typescript-eslint/parser',

    parserOptions: {

        project: 'tsconfig.json',

        tsconfigRootDir: __dirname,

        sourceType: 'module',

    },

    plugins: ['@typescript-eslint/eslint-plugin'],

    extends: [

        'eslint:recommended',

        'plugin:@typescript-eslint/recommended',

        'plugin:prettier/recommended',

    ],

    root: true,

    env: {

        node: true,

        jest: true,

    },

    ignorePatterns: ['.eslintrc.js'],

    rules: {

        '@typescript-eslint/interface-name-prefix': 'off',

        '@typescript-eslint/explicit-function-return-type': 'off',

        '@typescript-eslint/explicit-module-boundary-types': 'off',

        '@typescript-eslint/no-explicit-any': 'off',

        // "indent": [

        //   "error",

        //   2

        // ],

        "quotes": [

            "error",

            "single"

        ],

        "semi": [

            "error",

            "always"

        ],

        "max-len": [

            "warn",

            140

        ],

        "comma-dangle": [

            "error",

            {

                "arrays": "only-multiline",

                "objects": "only-multiline",

                "imports": "only-multiline",

                "exports": "only-multiline",

                "functions": "only-multiline"

            }

        ]

    },

};