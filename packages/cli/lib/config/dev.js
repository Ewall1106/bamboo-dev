const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

function resolve(file) {
  return path.resolve(process.cwd(), file);
}

module.exports = {
  mode: "development",
  entry: {
    main: resolve("./demo"),
  },
  output: {
    path: resolve("dist"),
    libraryTarget: "umd",
  },
  devServer: {
    static: {
      directory: resolve("dist"),
    },
    client: {
      overlay: false,
    },
    compress: true,
    port: 9000,
    hot: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
        exclude: "/node_modules/",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve("./demo/index.html"),
    }),
  ],
};
