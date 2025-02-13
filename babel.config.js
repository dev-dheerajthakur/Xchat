module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env', // Optional: You can change the path if your .env file is elsewhere
    }],
  ],
};
