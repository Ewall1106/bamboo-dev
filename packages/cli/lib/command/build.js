const ora = require("ora");
const consola = require("consola");
const webpack = require("webpack");

const config = require("../config/build");

const build = () => {
  const spinner = ora("component start build...").start();
  webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
      spinner.fail("build fail");
      consola.error(err || stats.toString());
      return;
    }
    spinner.succeed("build success");
  });
};

module.exports = {
  build,
};
