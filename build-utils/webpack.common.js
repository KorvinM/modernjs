const path = require('path'),
  {CleanWebpackPlugin} = require('clean-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  /*use src/index.js as entry point to bundle.
  If the src/index.js file imports other JavaScript files, bundle them as well
  */
  entry: './src/index.js',
  module: {
    rules: [
      {/*  //run js through babel and load */
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Modern-js',
      template: './src/index.html'
    }),
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
