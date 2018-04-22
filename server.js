var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        var req_url = url.parse(request.url);
        // console.log(req_url);
        /**
        Url {
          protocol: null,
          slashes: null,
          auth: null,
          host: null,
          port: null,
          hostname: null,
          hash: null,
          search: null,
          query: null,
          pathname: '/',
          path: '/',
          href: '/' }
         */
        var pathname = req_url.pathname;
        console.log("Request for " + pathname + " received.");

        // 这里未做任何处理，而是采用简洁的类似接口的形式进行转发
        // 将具体实现交给底层，保证模块间松耦合
        route(handle, pathname, response);
    };

    // http.createServer
    var server = http.createServer(onRequest);

    server.listen(3000);
    console.log('Server has started');
}

// 此处可以不一致，使用前者
exports.run = start;
