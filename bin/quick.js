#!/usr/bin/env node

const program = require('commander');
const init = require('./init')
const templates = require('./templates')

// 获取版本
program.version(require('../package.json').version)

// init项目
program.command('init <template-name> <name>')
    .description('init project')
    .action(init)

// 获取templates
program.command('templates')
    .description('show templates')
    .action(templates)

program.parse(process.argv); // 固定写法，解析命令行输入参数