let $ = require(`jquery`);
// let $ = require(`script!./jquery.min.js`);
require(`script!./long.min.js`);
require(`script!./bytebuffer.min.js`);
require(`script!./protobuf.min.js`);
require(`script!./vue/vue.min.js`);
require(`script!./vue/vue-router.min.js`);
// declare let $
declare let VueRouter;
declare let Vue;
// console.log("lib:", $)
// console.log("lib:", Vue)
// console.log("lib:", VueRouter)
// console.log("lib:", require("protobufjs"))
// export var nodeLibs = {
//     $: $,
//     jquery: $,
//     Vue: Vue,
//     VueRouter: VueRouter,
//     long: require('long'),
//     bytebuffer: require('bytebuffer'),
//     ProtoBuf: require("protobufjs"),
// };
window['$'] = $
window['Vue'] = Vue
window['VueRouter'] = VueRouter
// window['long'] = require(`script!./long.min.js`);
// window['bytebuffer'] =require(`script!./bytebuffer.min.js`);
// window['protobuf'] = require(`script!./protobuf.min.js`);
window['long'] = require('long')
window['bytebuffer'] = require('bytebuffer')
window['protobuf'] = require('protobufjs')