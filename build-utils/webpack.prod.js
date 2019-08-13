const Dotenv = require('dot-env-webpack');
module.exports ={
  mode: 'production',
  devtool: 'source-map',
  plugins: [
  new Dotenv({
    path: './.env-prod',
  })
  ],
};
