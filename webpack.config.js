const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        // on s'intéresse aux fichiers js et jsx, on exclue les fichiers de node_modules
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // utilisation du loader javascript babel
        use: {
          loader: "babel-loader",
        }
      },
      {
        // fichier css et utilisation des loader css et style
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // fichier html et utilisation du loader html loader
        test: /\.html$/,
        use: {
          loader: "html-loader",
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    })
  ]
}