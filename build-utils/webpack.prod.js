/* webpack.prod.js
 * run by [npm run build] */

const Dotenv = require('dotenv-webpack'),
      CssExtract = require('mini-css-extract-plugin'),
      UglifyJs = require('uglifyjs-webpack-plugin'),
      OptimizeCssAssets = require('optimize-css-assets-webpack-plugin');
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
    new OptimizeCssAssets({
      //default options for reference
      //assetNameRegExp: /\.optimize\.css$/g,
      //cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      //canPrint: true
    })
  ],
  optimization: {
    minimizer: [new UglifyJs()],
  },
};
