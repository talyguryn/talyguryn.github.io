const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/frontend/main.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './public/dist'),
    libraryExport: 'default', // uses to export .default field of app.js exported class instance
  },
  module: {
    rules: [
      {
        test: /\.pcss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              // publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      filename: '[name].css',
    }),
  ],
  optimization: {
    splitChunks: false,
  },
};
