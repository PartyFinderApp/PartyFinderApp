// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = config;

/*

This JavaScript file is a configuration file for Metro, which is the JavaScript bundler for React Native.
// Learn more https://docs.expo.io/guides/customizing-metro - This is a comment providing a link to the Expo documentation for customizing Metro.
const { getDefaultConfig } = require('expo/metro-config'); - This line is importing the getDefaultConfig function from the expo/metro-config module. This function returns the default configuration for Metro.
/** @type {import('expo/metro-config').MetroConfig} */ /*- This is a TypeScript type annotation. It's indicating that the config constant is of type MetroConfig from the expo/metro-config module. However, this line doesn't have any effect in a JavaScript file and can be removed.*/
/* const config = getDefaultConfig(__dirname); - This line is calling the getDefaultConfig function with the current directory as an argument, and assigning the result to the config constant. This will get the default Metro configuration for the current project.
module.exports = config; - This line is exporting the config constant. This allows other modules to import and use the Metro configuration.
In summary, this file is used to get and export the default Metro configuration for the current project.

*/