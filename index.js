#! node
const argv = require(__dirname + '/args');
const {scanAvailablePorts} = require("./scanner");

const { t: timeout, h: host } = argv;

console.log("Start scanning:", host);
const startTime = Date.now();

scanAvailablePorts(host, timeout * 1000).then(result => {
    console.log("Scanning completed in", Date.now() - startTime, 'ms.');
    console.log(result.length ? result.join(', ') : 'no opened ports found.');
});
