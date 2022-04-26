import path from 'path';
import webpack from 'webpack';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const config = (_, argv) => ({
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(dirname, 'dist'),
    clean: {
      keep: /\.git/,
    },
  },
  mode: argv.mode,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        // generator: {
        //   filename: 'images/[name][ext]',
        // },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      ARGV: JSON.stringify(argv),
      PRODUCTION: JSON.stringify(argv.mode === 'production'),
      DEVELOPMENT: JSON.stringify(argv.mode === 'development'),
    }),
  ],
  devtool: 'eval-cheap-module-source-map',
  target: 'web',
  devServer: {
    historyApiFallback: true,
    liveReload: true,
    open: true,
    port: 8080,
    proxy: {
      '/': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
});

export default config;
