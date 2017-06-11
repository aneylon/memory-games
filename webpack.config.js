const path = require('path')
const LiveReloadPlugin = require('webpack-livereload-plugin')

module.exports = {
  entry: './src/js/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public', 'js'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new LiveReloadPlugin()
  ]
}
