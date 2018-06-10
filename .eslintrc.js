module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "extends": ["eslint:recommended"],
    "globals": {
        "__inline": true,
        "IS_SERVER": true,
        "__uri": true
    },
    rules: {
        'no-console': 'off',
        "no-unused-vars": "off",
        "react/jsx-no-undef": "off",
        "react/jsx-uses-react": "off",
        "react/jsx-uses-vars": "off"
     }
};