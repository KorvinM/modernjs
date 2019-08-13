const Dotenv = require('dot-env-webpack');
module.exports ={
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new Dotenv({
      path: './.env-dev',
    })
  ],
};
