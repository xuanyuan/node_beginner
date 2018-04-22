var exec = require('child_process').exec;

function start(response) {
    console.log('请求处理程序 start 被调用');
    exec('ls -lah', function(error, stdout, stderr) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(stdout);
        response.end();
    });
}

function upload(response) {
    console.log('请求处理程序 upload 被调用');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello Upload');
    response.end();
}

exports.start = start;
exports.upload = upload;