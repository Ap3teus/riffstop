/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');

const path = require('path');
module.exports = {
  // eslint-disable-next-line no-undef
  plugins: [new webpack.IgnorePlugin(/^pg-native$/)],
};
