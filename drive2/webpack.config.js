const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  /**
   * Define entry point
   */
  entry: path.resolve(__dirname, 'src', 'entry.js'),

  /**
   * Set bundle params
   */
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'app',
    libraryTarget: 'umd'
  },

  /**
   * Loaders are used to transform certain types of modules
   */
  module: {
    rules: [
      /**
       * Process js files
       */
      {
        test: /\.js$/,
        exclude: [ /node_modules/ ],
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: [ '@babel/preset-env' ],
            },
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: false,
            },
          },
        ]
      },

      /**
       * Process css files
       */
      {
        test: /\.(pcss|css)$/,
        exclude: [ /node_modules/ ],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],
      },

      /**
       * Load assets files
       */
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ]
  },

  /**
   * Adding plugins to configuration
   */
  plugins: [
    /** Build separated styles bundle */
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    }),

    /** Build html file */
    new HtmlWebpackPlugin({
      hash: true,
      title: 'My Awesome application',
      myPageHeader: 'Hello World',
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: path.resolve(__dirname, 'dist', 'index.html')
    })
  ]
}