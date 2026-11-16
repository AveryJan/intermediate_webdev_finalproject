const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: './src/script.js',
  output: { filename: 'main.js', path: path.resolve(__dirname, 'dist'), clean: true },
  plugins: [new CopyWebpackPlugin({ patterns: [
    { from: 'index.html', transform: content => content.toString().replace('href="style.css"', 'href="style.css"').replace('src="script.js"', 'src="main.js"') },
    { from: 'style.css' },
    { from: 'favicon.ico' }
  ] })]
};
