#!/usr/bin/env node

const chalk = require('chalk');
const program = require('commander')
const fs = require('fs')
const pkg = require('./package.json')
const server = require('./scripts/server')
const log = require('./scripts/logger')
const watch = require('./scripts/watch')
const socket = require('./scripts/socket')
const file = require('./scripts/file')

const qrserver = require('./scripts/qrserver')
var p = require('path')
const HOST = '127.0.0.1'
program
  .version(pkg.version)

program
  .command('start')
  .option('--dir [value]', '文件夹名，默认weex')
  .option('--socketport [value]', '热更新端口默认:9897')
  .option('--serverport [value]', '热更新端口默认:9999')
  .option('--qr [value]', '显示二维码')
  .description('启动weex文件监听')
  .action((option) => {

    var dir = option.dir
    var socketport = option.socketport
    var serverport = option.serverport
    if (dir == undefined) {

      var path = process.cwd();
      dir = p.basename(path)
    }
    if (socketport == undefined) {
      socketport = 29990
    }
    if (serverport == undefined) {
      serverport = 9999
    }

    log.info(chalk.green("启动weex监听 dir:" + dir + "serverport:" + serverport + "socketport:" + socketport));
    socket.start(socketport);

    fs.exists('dist', (res) => {
      if (res) {
        // server.start('./dist/',serverport);
        if (option.qr == undefined) {
          qrserver.start('./dist/', serverport)
        } else {
          server.start('./dist/', serverport);
        }

        watch.start('./dist', true, function () {

          socket.send(HOST, socketport)
        });
      } else {
        fs.mkdir('dist', function () { //创建目录
          // server.start('./dist/',serverport);
          if (option.qr == undefined) {
            qrserver.start('./dist/', serverport)
          } else {
            server.start('./dist/', serverport);
          }
          watch.start('./dist', true, function () {
            socket.send(HOST, socketport)
          });

        })
      }

    })




    var ip = require('ip');
    log.info(chalk.green("如果没有弹出浏览器,请手动打开此地址：" + 'http://' + ip.address() + ":8890/pages/"));


  })








program.parse(process.argv)
module.exports = {
  file
}