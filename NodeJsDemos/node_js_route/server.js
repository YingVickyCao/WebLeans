var http = require("http");
var url = require("url");
var fs = require('fs');
var querystring = require('querystring');

var host = '127.0.0.1';
var port = 8888;

function start(route) {
    function onRequest(request, response) {

        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        // route(pathname);
        switch (pathname) {
            // http://127.0.0.1:8888
            //'首页'
            case '/':
            // http://127.0.0.1:8888/index
            case '/index':
                showPaper('./view/index.html', 200, response);
                break;

            // http://127.0.0.1:8888/login
            case '/login':
                showPaper('./view/login.html', 200, response);
                break;

            // http://127.0.0.1:8888/about
            //'about页'
            case '/about':
                showPaper('./view/about.html', 200, response);
                break;

            //'404页'
            default:
                showPaper('./view/404.html', 404, response);
                break;
        }

        // var body = "";
        // request.on('data', function (chunk) {
        //     body += chunk;
        // });
        // request.on('end', function () {
        //     // 解析参数
        //     body = querystring.parse(body); // 反序列化 body string : string => format
        //     // 设置响应头部信息及编码
        //     response.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
        //     // response.writeHead(200, { 'Content-Type': 'application/json; charset=utf8' });

        //     console.log(body.name)
        //     console.log(body.pwd)

        //     // var json = JSON.stringify({
        //     //     "username" : "1",
        //     //     "password" : "2"
        //     //     })


        //     // var json = JSON.stringify({
        //     //     msg: "成功",
        //     //     result: [{
        //     //         "name": "菜鸟教程",
        //     //         "site": "http://www.runoob.com"
        //     //     }, {
        //     //         "name": "新手教程",
        //     //         "site": "csdnnnn"
        //     //     }],
        //     //     status: 1
        //     // });

        //     // response.write(json);
        //     //  response.json({msg:"成功"});
        //     // if (body.name && body.pwd) { // 输出提交的数据
        //     response.write("name:" + body.name);
        //     response.write("<br>");
        //     response.write("pwd:" + body.pwd);
        //     // response.write(result);
        //     // response.send({msg:"成功01"})
        //     // response.json({msg:"成功"});
        //     // }
        //     response.end();
        // });
    }

    function showPaper(path, status, response) {
        var content = fs.readFileSync(path);
        response.writeHead(status, { 'Content-Type': 'text/html;charset=utf-8' });
        response.write(content);
        response.end();
    }

    http.createServer(onRequest).listen(port, host);
    console.log("Server has started.");
}

exports.start = start;

// Ref
// https://blog.csdn.net/u011146511/article/details/79876976
// http://www.runoob.com/nodejs/node-js-get-post.html
// http://www.runoob.com/nodejs/nodejs-router.html