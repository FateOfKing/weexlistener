// const ios=require('./scripts/run/ios')
const util=require('./scripts/utils')
const log=require('./scripts/logger')
const android=require('./scripts/plugin/android')
const ios=require('./scripts/plugin/ios')
const plugin=require('./scripts/plugin')
const net=require('./scripts/utils/net')
const run=require('./scripts/run/ios')
const file=require('./scripts/file')
const clone=require('./scripts/clone')
const path = require('path')
const coding = require('./scripts/coding')
var fs=require('fs');
// const process=require('child_process')
// let start='my'
// let end='op'
// let str='my ui dsds op'
// // let res=util.regexOne(start,end,str)
// // console.log(res)
//
//
// function checkExist(name,path){
//   var fs=require('fs');
//   // let path='/Users/zhengjiangrong/Documents/GitHub/weexplus/platforms/android/weexplus/settings.gradle'
//   var result=fs.readFileSync(path, 'utf8')
//   return result.indexOf(name)!=-1
//
// }
//
// var fs=require('fs');
// let path='/Users/zhengjiangrong/Documents/GitHub/weexplus/platforms/android/weexplus/settings.gradle'
// var result=fs.readFileSync(path, 'utf8')
// console.log(result)
// let y=checkExist('oss',path)
// console.log(y)
// let find=util.regexOne('include','oss',result)
// console.log(find)

// process.chdir('/Users/zhengjiangrong/Desktop/wxpdemo')



//
// plugin.getInfo({name:'wechat'},(res)=>{
//   if(!res.ios_url){
//     log.fatal('没有这个插件')
//   }
//
//   log.info('ios:'+res.ios_url)
//   log.info('android:'+res.ios_url)
// })
// let res=util.exec('weexplus -v')
// console.log(res)


// var px=  process.cwd();


// process.chdir('/Users/zhengjiangrong/work/corenerstone/wb/wf')
// console.log('xxx='+process.cwd())
// // console.log(path.join(px,'Users/zhengjiangrong/Desktop/wwx'))
// let p={}
// p.dir='wf'
// run.runIOS(p)



// let cmd='xcodebuild -workspace wwx.xcworkspace -scheme wwx -configuration Debug -destination id=4E33AC5F-2E1B-4BD2-9C7B-CAAA5759D83F -sdk iphonesimulator -derivedDataPath build clean build'
// util.exec(cmd);

// process.chdir()
// clone.renameAndroidDir('/Users/zhengjiangrong/Desktop/boilerplate-master','com.xx.so.xxx')
// let p='com.farwolf.demo'
// p=p.replace(/\./g,'/')
// console.log(p)
// file.mkdir('com/farwolf/demo')

process.chdir('/Users/zhengjiangrong/Desktop')
// clone.download('sourceAppCode','com.pnc.app','项目管理助手')
clone.renameProject('xop','com.xx.so.xxx','例子')
// clone.renameAndroidDir('xop','com.xx.so.xxx')
// clone.renameIos('xop','com.xx.so.xxx')
// file.mkdir('m/n/k')




// let content = fs.readFileSync('/Users/zhengjiangrong/Desktop/MVApplication.java');
// let dst='/Users/zhengjiangrong/Desktop/xxx/ll/xl.java'
// fs.writeFileSync(dst, content);


// download egoist/tooling's master branch archive
// coding('weexplus/boilerplate', {target: 'boilerplate'})


