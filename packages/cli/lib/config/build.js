const path = require("path");

function resolve(file) {
  return path.resolve(process.cwd(), file);
}

module.exports = {
  mode: "production",
  entry: {
    index: resolve("./src"),
  },
  output: {
    path: resolve("./lib"),
    libraryTarget: "commonjs",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  externals: {
    react: "react",
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
};
