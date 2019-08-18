const Dotenv = require('dotenv-webpack');
module.exports ={
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {/*sass/css support
        chained loaders run in reverse order
        style-loader loads a <style> tag into the DOM after the doc loads
        this causes FOUC so is reserved for dev mode only*/ 
        test:/\.scss$/,
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]},
  plugins: [
    new Dotenv({
      path: './.env-dev',
    })
  ],
};
