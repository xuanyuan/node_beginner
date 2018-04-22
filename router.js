function route(handle, pathname, response) {
    console.log('pathname:' + pathname);

    /** TODO
     * 此处应该也可以进行所有请求的拦截过滤操作
     * 针对所有请求做业务处理
     * 例如：添加token，权限验证等业务处理
     */

    if (typeof handle[pathname] === 'function') {
        handle[pathname](response);
    } else {
        // 这里起到了404的处理效果
        console.log('No request handler found for ' + pathname);
        response.writeHead(404, {'Cotent-Type': 'text/plain'});
        response.write('404 Not found');
        response.end();
    }
}

exports.route = route;