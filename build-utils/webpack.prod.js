const path = require("path");

const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /(\.css$)/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          limit: 1024,
          name: "[name].[ext]",
          publicPath: "dist/assets/fonts/",
          outputPath: "dist/assets/fonts/",
        },
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "..", "./.env.production"),
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "..", "./dist"),
    historyApiFallback: true,
  },
  devtool: "source-map",
};
