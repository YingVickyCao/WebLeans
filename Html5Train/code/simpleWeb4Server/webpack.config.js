var path = require('path');
var webpack = require('webpack');

// Content not from webpack is served from
// https://cloud.tencent.com/developer/article/1148463

module.exports = {
    mode: 'development',
    //修改上下文，之后entry就可以写相对路径
    // context: path.resolve(__dirname, '/js'),
    // 当entry是个数组的时候，里面同样包含入口js文件，另外一个参数可以是用来配置webpack提供的一个静态资源服务器，webpack-dev-server。
    // webpack-dev-server会监控项目中每一个文件的变化，实时的进行构建，并且自动刷新页面
    entry: 
        //'webpack/hot/only-dev-server',
        './www/app/main.js'
    ,
    // 当我们在entry中定义构建多个文件时，filename可以对应的更改为[name].js用于定义不同文件构建后的名字
    output: {
        path: path.resolve(__dirname, 'www/dist'),
        filename: 'bundle.js',
        publicPath: '/eppublic'
    },
    // 关于模块的加载相关，我们就定义在module.loaders中。
    // 这里通过正则表达式去匹配不同后缀的文件名，然后给它们定义不同的加载器。
    // 比如说给less文件定义串联的三个加载器（！用来定义级联关系）
    // 此外，还可以添加用来定义png、jpg这样的图片资源在小于10k时自动处理为base64图片的加载器：
    // { test: /\.(png|jpg)$/,loader: 'url-loader?limit=10000'}
    module: {
              rules: [ {
                 test: /\.jsx?$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader',
        
                 query: {
                    presets: ['es2015']
                 }
              }]
           }
    
    // module: {
    //     loaders: [{
    //         test: /\.js$/,
    //         exclude: [path.resolve(__dirname, "node_modules")],
    //         include: [path.resolve(__dirname, "www/app")],
    //         loader: 'babel-loader',
    //         //或者在根目录下新建.babelrc文件输入
    //         // {
    //         //   "presets": ["es2015"]
    //         // }
    //         options:{
    //             presets:["env", "es2015"]
    //         },
    //     }
    //         //{ test: /\.css$/, loader: "style!css" },
    //         //{ test: /\.less/,loader: 'style-loader!css-loader!less-loader'}
    //     ]
    // },
    // webpack在构建包的时候会按目录的进行文件的查找，resolve属性中的extensions数组中用于配置程序可以自行补全哪些文件后缀
    // 然后我们想要加载一个js文件时，只要require(‘common’)就可以加载common.js文件了
    //resolve:{
    //    extensions:['','.js','.json']
    //}
    // 当我们想在项目中require一些其他的类库或者API，而又不想让这些类库的源码被构建到运行时文件中，这在实际开发中很有必要
    // 这样我们就可以放心的在项目中使用这些API了：var jQuery = require(“jquery”);
    // externals: {
    //    "jquery": "jQuery"
    // }
    // plugins: [
    //     //js压缩插件
    //     new webpack.optimize.UglifyJsPlugin()
    // ]
    
};
// module.exports = config;