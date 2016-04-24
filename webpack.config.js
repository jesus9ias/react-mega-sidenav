var path = require('path');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'build'),
        filename: "index.js"
    },
    module: {
      loaders: [{
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }]
    }
};
