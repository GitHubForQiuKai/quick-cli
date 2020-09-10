const { promisify } = require('util'); // promise转换
const download = promisify(require('download-git-repo')); // github仓库代码下载
const ora = require('ora');// 命令行loading

// 默认模板所在的仓库地址
const gitRepo = 'github:GitHubForQiuKai/quick-templates';

/**
 * 根据分支名称下载到本地
 * @param {*} branchName 远程分支名称
 * @param {*} destination 本地目录
 */
const clone = async (branchName, destination) => {
    const spinner = ora('downloading template...');
    spinner.start()

    await download(`${gitRepo}#${branchName}`, destination)

    spinner.succeed('Download successful')
}

module.exports = clone