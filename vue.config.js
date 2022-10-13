const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

let cesiumSource = "./node_modules/cesium/Build/Cesium";

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  productionSourceMap: false,
  devServer: {
    host: "localhost",
    open: false, 
    port: 8011, 
    hot: true, 
  },
  configureWebpack: {
    output: {
      sourcePrefix: " ",
    },
    amd: {
      toUrlUndefined: true,
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": path.resolve("src"),
        cesium: path.resolve(__dirname, cesiumSource),
      },
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: path.join(cesiumSource, "Workers"), to: "Workers" },
      ]),
      new CopyWebpackPlugin([
        { from: path.join(cesiumSource, "Assets"), to: "Assets" },
      ]),
      new CopyWebpackPlugin([
        { from: path.join(cesiumSource, "Widgets"), to: "Widgets" },
      ]),
      new CopyWebpackPlugin([
        {
          from: path.join(cesiumSource, "ThirdParty/Workers"),
          to: "ThirdParty/Workers",
        },
      ]),
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify("./"),
      }),
    ],
    module: {
      unknownContextCritical: /^.\/.*$/,
      unknownContextCritical: false,
    },
  },
};
