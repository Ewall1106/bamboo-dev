const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    main: path.resolve(process.cwd(), "./src/index.ts"),
  },
  output: {
    path: path.resolve(process.cwd(), "./lib"),
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
