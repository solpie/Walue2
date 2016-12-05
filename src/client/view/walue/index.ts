import { Navbar } from './navbar/Navbar';
import { monitorView } from './monitor/Monitor';
// require(`script!./../../libs/jquery.min.js`);
// require(`script!./../../libs/long.min.js`);
// require(`script!./../../libs/bytebuffer.min.js`);
// require(`script!./../../libs/protobuf.min.js`);
// require(`script!./../../libs/vue/vue.min.js`);
// require(`script!./../../libs/vue/vue-router.min.js`);
// window['long'] = require('long')
// window['bytebuffer'] = require('bytebuffer')
// window['ProtoBuf'] = require("protobufjs")
//////////////
///////////////////
var version = '16.11.25.4';
//登录之后显示用户名
// var version = '16.11.25.3';
//fixed：无法选择帐号
// var version = '16.11.25.2';
//打开房间时默认登陆第一个帐号（或最近一个帐号）连接弹幕服务器
// var version = '16.11.25.1';
//刷新话题弹幕池不清空
//舞里由衣
// var version = '16.11.21.1';
// add:登录用户发送弹幕
// var version = '16.11.11.1';
// fixed：开四个直播间时候 直播列表连接无法点击
document.title = "舞里由衣 ver " + version;
var routes = [
    {
        path: '/', name: 'home',
        components: { default: monitorView, Navbar: Navbar }
    }
];

declare var VueRouter;
declare var Vue;
var router = new VueRouter({
    routes // short for routes: routes
});

router.afterEach((to, from) => {
    var toPath = to.path;
    router.app.active = toPath.split("/")[1];
});

var app = new Vue({
    router
}).$mount('#app');