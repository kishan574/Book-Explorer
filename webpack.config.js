const path = require('path');
module.exports = {
    entry: ['./app/index.js'],
    output: {
        //path: './build',
        path: path.resolve(__dirname+ '/build'),
        filename: 'bundle.js'
    },
    mode: 'none'
    ,
    module: {
        rules:[
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer:{
        port: 5500,
        contentBase:'./build',
        inline: true
    }
}