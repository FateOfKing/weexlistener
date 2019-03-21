#!/usr/bin/env node

const chalk = require('chalk');
const program = require('commander')
const fs = require('fs')
const pkg = require('./package.json')
const log = require('./scripts/logger')
const watch = require('./scripts/watch')
const socket = require('./scripts/socket')
const file = require('./scripts/file')

var p = require('path')
const HOST = '127.0.0.1'
program
  .version(pkg.version)

program
  .command('start')
  .option('--dir [value]', '文件夹名')
  .option('--socketport [value]', '热更新端口默认:9888')
  .description('启动weex文件监听')
  .action((option) => {

    var dir = option.dir
    var socketport = option.socketport
    if (dir == undefined) {

      var path = process.cwd();
      dir = p.basename(path)
    }
    if (socketport == undefined) {
      socketport = 29998
    }


    log.info(chalk.green("启动weex监听 dir:" + dir + " socketport:" + socketport));
    socket.start(socketport);

    fs.exists('dist', (res) => {
      if (res) {
        watch.start('./dist', true, function () {

          socket.send(HOST, socketport)
        });
      } else {
        fs.mkdir('dist', function () { //创建目录
          watch.start('./dist', true, function () {
            socket.send(HOST, socketport)
          });

        })
      }

    })
  })

program.parse(process.argv)
module.exports = {
  file
}