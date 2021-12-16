const webpack = require("webpack");
const config = require("../config/webpack.config");

const build = () => {
  webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
      console.log(err || stats.toString());
    }
  });
};

module.exports = {
  build,
};
