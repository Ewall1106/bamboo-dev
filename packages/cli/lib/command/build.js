const ora = require("ora");
const consola = require("consola");
const webpack = require("webpack");

const config = require("../config/webpack.config");

const build = () => {
  const spinner = ora("组件打包开始build...").start();
  webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
      spinner.fail("build失败");
      consola.error(err || stats.toString());
      return;
    }
    spinner.succeed("build成功");
  });
};

module.exports = {
  build,
};
