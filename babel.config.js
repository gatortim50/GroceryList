module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx'],
        alias: {
          components: './src/Components',
          screens: './src/Screens',
          redux: './src/Redux',
          utils: './src/Utils',
        },
      },
    ],
  ],
};
