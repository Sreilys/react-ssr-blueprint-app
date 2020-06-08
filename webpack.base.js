module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [
            ["@babel/env", {
                "targets": {
                    'browsers': ['Chrome >=59']
                },
                "modules":false,
                "loose":true
            }],
            "@babel/react"
          ],
        }
      }
    ]
  }
};
