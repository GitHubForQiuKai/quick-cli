const { promisify } = require('util')
const chalk = require('chalk')
const clear = require('clear')
const figlet = promisify(require('figlet'))


module.exports.log = function (msg) {
    console.log(chalk.white(msg))
}

module.exports.clear = function () {
    clear()
}

module.exports.figlet = function (msg) {
    figlet(msg)
}


module.exports.success = function (msg) {
    console.log(chalk.blue(msg))
}

module.exports.fail = function (msg) {
    console.log(chalk.red(msg))
}