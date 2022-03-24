const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
  minify: {
    collapseWhitespace: false,
    removeComments: false,
    minifyCSS: false,
  },
});


const minicssPlugin = new MiniCssExtractPlugin({
  // Options similar to the same options in webpackOptions.output
  // both options are optional
  filename: "[name].module.css",
});

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.scss$/,
        use: [
          {
            loader:
              process.env.NODE_ENV !== "production"
                ? MiniCssExtractPlugin.loader
                : "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 1,
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader:
              process.env.NODE_ENV !== "production"
                ? MiniCssExtractPlugin.loader
                : "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              // modules: {
              //   localIdentName: "[name]__[local]___[hash:base64:5]",
              // },
            },
          },
        ],
      },
    ],
  },
  plugins: [htmlPlugin, minicssPlugin],
};
