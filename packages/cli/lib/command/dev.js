const ora = require("ora");
const consola = require("consola");
const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const config = require("../config/dev");

const compiler = Webpack(config);
const devServerOptions = { ...config.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

const dev = () => {
  server.start();
};

module.exports = {
  dev,
};
