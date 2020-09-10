const download = require('../lib/download')
const logger = require('../lib/logger')
const { spawn } = require('../lib/spawn')
const path = require('path')

module.exports = async (templateName, name) => {
    logger.clear()
    logger.log('开始创建项目' + name)
    // 下载模板到指定目录
    await download(templateName, name)
    logger.success('创建项目完成')

    logger.log('开始安装依赖')
    const npm = process.platform === "win32" ? "cnpm.cmd" : "cnpm"
    const args = ['install']
    const projectPath = path.resolve('./' + name)
    console.log(projectPath)
    await spawn(npm, args, {
        cwd: projectPath
    });

    logger.success(`
    安装完成
    To start
    ——————————————————
    cd ${name}
    npm run server
    ——————————————————
    `)
}