const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");

const argv = yargs(hideBin(process.argv))
    .options({
        h: {
            alias: 'host',
            demandOption: true,
            default: 'http://localhost',
            describe: 'host to scan',
            type: 'string'
        },
        t: {
            alias: 'timeout',
            default: 5,
            describe: 'port connection timeout in seconds',
            type: 'number'
        }
    })
    .help()
    .argv

module.exports = argv;