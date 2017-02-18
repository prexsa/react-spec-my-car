var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js',
    'webpack-hot-middleware/client'
  ],
  output: {
    path: path.join(__dirname, 'src', 'public', 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: ['babel'],
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}