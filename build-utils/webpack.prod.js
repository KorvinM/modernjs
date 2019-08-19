const Dotenv = require('dotenv-webpack');
const CssExtract = require('mini-css-extract-plugin');
module.exports ={
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {/*style loaders
        chained loaders run in reverse order*/
        test:/\.scss$/,
        use:[CssExtract.loader,'css-loader', 'postcss-loader','sass-loader']
      }
    ]},
  plugins: [
  new Dotenv({
    path: './.env-prod',
  }),
  new CssExtract(),
  ],
};
