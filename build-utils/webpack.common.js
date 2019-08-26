/* webpack.common.js
 * required by webpack.config.js
 */

const path = require('path'),
      {CleanWebpackPlugin} = require('clean-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      CopyPlugin = require('copy-webpack-plugin'),
      Dotenv = require('dotenv-webpack');

module.exports = {
  /*use src/index.js as entry point to bundle.
  If the src/index.js file imports other JavaScript files, bundle them as well
  */
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Mode',
      subtitle: 'Web foundation',
      template: './src/index.html'
    }),
    new CopyPlugin([
      {from: './src/static', to: 'static'}
    ]),
    new Dotenv({//refers to common .env file
      path: './.env',
    })
  ],
//*/
  //define the output path
  output: {
    path: path.resolve(__dirname,'../','build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  //define the development server path
  devServer: {
    contentBase: './build'
  }
};
