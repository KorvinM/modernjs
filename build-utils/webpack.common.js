const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  //use src/index.js as entry point to bundle. If the src/index.js file imports other JavaScript files, bundle them as well
  entry: './src/index.js',
  module: {
    rules: [
      {/*  //add babel loader */
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Modernjs',
      template: './src/index.html'
    })
  ],
//*/
  //define the output path
  output: {
    path: path.resolve(__dirname,'../','build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  //define the server path
  devServer: {
    contentBase: './build'
  }
};
