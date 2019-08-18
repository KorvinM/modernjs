const webpackMerge = require('webpack-merge'),
      commonConfig = require('./webpack.common.js');

//set optional addons
const getAddons = addonsArgs => {
  const addons = Array.isArray(addonsArgs)
    ? addonsArgs
    : [addonsArgs];

  return addons
    .filter(Boolean)
    .map(name => require(`./addons/webpack.${name}.js`));
};

module.exports = ({ env, addon }) => {
  const envConfig = require(`./webpack.${env}.js`);

  return webpackMerge(commonConfig, envConfig, ...getAddons(addon));
};
