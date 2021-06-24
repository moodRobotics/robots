const https = require('https');
const http = require('http');

exports.statusdata = ['start', 'finish', 'error', 'found', 'warning', 'duty', 'stop'];
exports.status = function (setup, status,action, message) {
    const data = JSON.stringify({
        robot: setup.name,
        version: setup.version,
        status: status,
        action: action,
        msg: message
    })

    const options = {
        hostname: setup.host,
        port: setup.port,
        path: setup.path,
        method: setup.method,
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    }
    const req = http.request(options, (res) => {
        res.on('data', (d) => {
            // process.stdout.write(d)
        })
    })

    req.on('error', (error) => {
        console.error(error)
    })

    req.write(data)
    req.end()
}

exports.sendMQTT = function (bouncer, topic, value) {
    https.get(bouncer + "?topic=" + topic + "&value=" + value);
}