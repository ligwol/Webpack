const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // подключение плагина (указывает откуда брать исходный html)
const HtmlWebpackPlugin = require('html-webpack-plugin');  //подключение плагиa (удаление лишних файлов)

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js"
    },
    mode: "development",  //или npx webpack --mode=development development || production
    devServer: {
        open: true, // для открытия приложения в браузере
        port: 3030
    },
    plugins: [  //плагины хранятся в массиве
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/public/index.html", // указать какой html является шаблоном
            inject: "body" //body или head(по старому стандарту)  
        })
    ]
}