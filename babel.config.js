module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@features': './src/features',
          '@shared': './src/shared',
          '@entities': './src/entities',
          '@widgets': './src/widgets',
          '@pages': './src/pages',
          '@app': './src/app',
        },
      },
    ],
  ],
};
