/* webpack.config.js
 * returns a config for webpack, merging:
 * webpack.common.js config
 * dev [npm start]
 * or prod [npm run build*]
 * optional addons */

const { merge } = require('webpack-merge'),
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
  return  merge(commonConfig, envConfig, ...getAddons(addon)); 
};
