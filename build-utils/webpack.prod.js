const Dotenv = require('dotenv-webpack');
const CssExtract = require('mini-css-extract-plugin');
module.exports ={
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {//add style loaders
        test:/\.scss$/,
        use:[CssExtract.loader,'css-loader', 'sass-loader']
      }
    ]},
  plugins: [
  new Dotenv({
    path: './.env-prod',
  }),
  new CssExtract(),
  ],
};
