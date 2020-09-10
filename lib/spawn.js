const { spawn } = require('child_process');

module.exports.spawn = async (...args) => {
    const subprocess = spawn(...args);
    return new Promise((reslove) => {
        // 将子进程的输入信息流pipe到主进程
        subprocess.stdout.pipe(process.stdout)
        subprocess.stderr.pipe(process.stderr)
        subprocess.stderr.on('close', () => {
            reslove()
        });
    })
}


// exports.install = function (projectPath, packageName, save, dev) {
//     const npm = 'npm'
//     const args = ['install']
//     args.push(packageName)
//     if (save) args.push('--save')
//     if (dev) args.push('--save-dev')
//     var ls = require('child_process').spawn(npm, args, {
//         // stdio: 'inherit',
//         cwd: projectPath
//     })
//     ls.stdout.on('data', function (data) {
//         console.log('stdout: ' + data)
//     })
//     ls.stderr.on('data', function (err) {
//         console.log('stderr: ' + err)
//     })
//     ls.once('close', function () {
//         console.log('install success...')
//     })
// }