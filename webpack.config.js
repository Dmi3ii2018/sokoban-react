const path = require(`path`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = {
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `build`)
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, `build`),
    compress: false,
    open: true,
    port: 1337,
  },
  resolve: {
    extensions: [`*`, `.js`, `.jsx`]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: `html-loader`
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:
        {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.css$/,
        use: [
          `style-loader`,
          MiniCssExtractPlugin.loader,
          {
            loader: `css-loader`,
            options: {sourceMap: true}
          }
        ]
      },
      {
        test: /images[\\\/].+\.(gif|png|jpe?g|svg)$/i,
        use: [{
          loader: `file-loader`,
          options: {
            name: `images/[name][hash].[ext]`
          }
        },
        {
          loader: `image-webpack-loader`,
          options: {
            mozjpeg: {
              progressive: true,
              quality: 70
            }
          },
        },
        ],
      },
    ],
  },
  devtool: `source-map`,
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].css`,
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: `./src/index.html`,
      filename: `index.html`,
    }),
  ],
};
