const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config,env) {
    //do stuff with the webpack confg...

    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
    return config;
}