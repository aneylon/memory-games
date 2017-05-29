const path = require('path')

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
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
}
