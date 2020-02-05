const path = require(`path`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const CopyWebpackPlugin = require(`copy-webpack-plugin`);

module.exports = {
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, `public`),
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
  ],
};
