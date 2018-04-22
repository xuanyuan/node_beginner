function route(handle, pathname) {
    console.log('pathname:' + pathname);

    /** TODO
     * 此处应该也可以进行所有请求的拦截过滤操作
     * 针对所有请求做业务处理
     * 例如：添加token，权限验证等业务处理
     */

    if (typeof handle[pathname] === 'function') {
        handle[pathname]();
    } else {
        // 这里起到了404的处理效果
        console.log('No request handler found for ' + pathname);
    }
}

exports.route = route;