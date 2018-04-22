var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

// 定义路由的映射关系
var handle = {}
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

/**
 * TODO
 * 404如何定义
 * 存在通配符*号执行顺序如何
 *========================
 * 全部在router.js路由中实现
 */

server.run(router.route, handle);