const path = require('path');
const webpack = require('webpack');
const PACKAGE = require('./package.json');

const banner =
  `${PACKAGE.name} - ${PACKAGE.version} | ` +
  `(c) ${PACKAGE.author} | ${PACKAGE.license} | ${PACKAGE.homepage}`;

const PATHS = {
  entryPoint: path.resolve(__dirname, 'src/index.ts'),
  bundles: path.resolve(__dirname, 'dist')
};

const config = {
  entry: {
    'dinopass.min': [PATHS.entryPoint]
  },
  mode: 'production',
  output: {
    path: PATHS.bundles,
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'DinoPass',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'source-map',
  externals: {
    axios: 'axios'
  },
  plugins: [
    new webpack.BannerPlugin({
      banner,
      entryOnly: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
