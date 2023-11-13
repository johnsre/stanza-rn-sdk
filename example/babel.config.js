const path = require('path');
const pak = require('../package.json');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          [pak.name]: path.join(__dirname, '..', pak.source),
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        safe: true,
        allowList: [
          'NODE_ENV',
          'STANZA_HUB_ADDRESS',
          'STANZA_ENVIRONMENT',
          'STANZA_API_KEY',
        ],
        allowUndefined: false,
      },
    ],
  ],
};
