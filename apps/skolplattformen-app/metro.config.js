// const { withNxMetro } = require('@nx/react-native')

// const MetroConfig = require('@ui-kitten/metro-config')
// const evaConfig = {
//   evaPackage: '@eva-design/eva',
//   customMappingPath: './apps/skolplattformen-app/design/mapping.json',
// }

// const evaMetroConfig = MetroConfig.create(evaConfig, {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
// })

// module.exports = withNxMetro(evaMetroConfig, {
//   // Change this to true to see debugging info.
//   // Useful if you have issues resolving modules
//   debug: false,
//   // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx'
//   extensions: [],
// })


const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);