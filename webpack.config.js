const path = require('path');
const htmlWebpackPlugin =require('html-webpack-plugin');
const htmlPlugin = new htmlWebpackPlugin({
    template:'./src/index.html',
    filname:'index.html'
});
module.exports={
    entry:path.join(__dirname,'./src/index.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    //编译模式
    mode:'production', //production
    plugins:[htmlPlugin],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:'/\.less$/',user:['style-loader','css-loader','less-loader']}
        ]
    }
}
