/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Navbar_1 = __webpack_require__(49);
	var Monitor_1 = __webpack_require__(51);
	var version = '16.11.25.4';
	document.title = "舞里由衣 ver " + version;
	var routes = [
	    {
	        path: '/', name: 'home',
	        components: { default: Monitor_1.monitorView, Navbar: Navbar_1.Navbar }
	    }
	];
	var router = new VueRouter({
	    routes: routes
	});
	router.afterEach(function (to, from) {
	    var toPath = to.path;
	    router.app.active = toPath.split("/")[1];
	});
	var app = new Vue({
	    router: router
	}).$mount('#app');


/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	exports.Navbar = {
	    props: {
	        active: {},
	    },
	    template: __webpack_require__(50),
	    methods: {}
	};


/***/ },

/***/ 50:
/***/ function(module, exports) {

	module.exports = "<nav class=\"nav\">\r\n    <div class=\"nav-left\">\r\n        <a class=\"nav-item is-brand\" href=\"#\">\r\n            <img src=\"xxxHTMLLINKxxx0.56869940325595980.2184023175232066xxx\" alt=\"Walue\">\r\n        </a>\r\n    </div>\r\n\r\n    <div class=\"nav-center\">\r\n        <a class=\"nav-item\" href=\"#\">\r\n            <span class=\"icon\">\r\n        <i class=\"fa fa-github\"></i>\r\n      </span>\r\n        </a>\r\n        <a class=\"nav-item\" href=\"#\">\r\n            <span class=\"icon\">\r\n        <i class=\"fa fa-twitter\"></i>\r\n      </span>\r\n        </a>\r\n    </div>\r\n\r\n    <span class=\"nav-toggle\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n    </span>\r\n\r\n    <div class=\"nav-right nav-menu\">\r\n        <a class=\"nav-item\" href=\"#\">\r\n      Setting\r\n    </a>\r\n    </div>\r\n</nav>";

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Player_1 = __webpack_require__(52);
	var MonitorModel_1 = __webpack_require__(55);
	var JsFunc_1 = __webpack_require__(62);
	var VueBase_1 = __webpack_require__(53);
	exports.monitorModel = new MonitorModel_1.MonitorModel();
	var MonitorView = (function (_super) {
	    __extends(MonitorView, _super);
	    function MonitorView() {
	        _super.call(this);
	        this.template = __webpack_require__(63);
	        this.topicArr = VueBase_1.VueBase.PROP;
	        this.roomArr = VueBase_1.VueBase.PROP;
	        this.playerArr = VueBase_1.VueBase.PROP;
	        this.components = {
	            'Player': Player_1.playerView,
	        };
	        this.methods = {
	            onSelectTopic: function (topicId) {
	                var _this = this;
	                console.log("onSelectTopic:", topicId);
	                exports.monitorModel.getLiveList(topicId, function (roomArr) {
	                    _this.roomArr = roomArr;
	                    for (var i = 0; i < _this.roomArr.length; i++) {
	                        var roomInfo = _this.roomArr[i];
	                        var urlLen = roomInfo.rtmp.length;
	                        roomInfo.shortUrl = roomInfo.rtmp.substr(0, 30)
	                            + "..." + roomInfo.rtmp.substr(urlLen - 11, 11);
	                    }
	                    console.log('roomArr', _this.roomArr);
	                    $('#roomList').show();
	                });
	            },
	            onOpenRoom: function (roomInfo) {
	                console.log(roomInfo);
	                this.playerArr.push(roomInfo);
	                $('#roomList').hide();
	            },
	        };
	        VueBase_1.VueBase.initProps(this);
	    }
	    MonitorView.prototype.created = function () {
	        console.log("created");
	    };
	    MonitorView.prototype.mounted = function () {
	        this.playerArr = [];
	        console.log("mounted");
	        this.getTopicInfo();
	    };
	    MonitorView.prototype.getTopicInfo = function () {
	        var _this = this;
	        exports.monitorModel.getTopic(function (topicInfoArr) {
	            var a = topicInfoArr.sort(JsFunc_1.descendingProp('liveCount'));
	            var actTopic = [];
	            var disActTopic = [];
	            for (var i = 0; i < a.length; i++) {
	                var topicObj = a[i];
	                if (topicObj.hasActiveLive) {
	                    actTopic.push(topicObj);
	                }
	                else
	                    disActTopic.push(topicObj);
	            }
	            if (exports.monitorModel.settingModel.isShowRecVideo)
	                _this.topicArr = actTopic.concat(disActTopic);
	            else
	                _this.topicArr = actTopic.concat();
	            console.log('topicInfo', _this.topicArr);
	        });
	    };
	    return MonitorView;
	}(VueBase_1.VueBase));
	exports.monitorView = new MonitorView();


/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var VueBase_1 = __webpack_require__(53);
	var PlayerView = (function (_super) {
	    __extends(PlayerView, _super);
	    function PlayerView() {
	        _super.call(this);
	        this.template = __webpack_require__(54);
	        this.roomInfo = VueBase_1.VueBase.PROP;
	        this.idx = VueBase_1.VueBase.PROP;
	        VueBase_1.VueBase.initProps(this);
	    }
	    PlayerView.prototype.created = function () {
	        console.log("created player:", this.idx, this.roomInfo);
	    };
	    PlayerView.prototype.mounted = function () {
	        var _this = this;
	        var playerId = 'player' + this.roomInfo.id;
	        console.log("mounted player", playerId);
	        var $player = $(this.$el).find('video').attr('id', playerId);
	        var player = videojs(playerId, {
	            autoplay: true
	        }, function () {
	            console.log('Good to go!');
	            var url1 = _this.roomInfo.rtmp;
	            player.src({ src: url1, type: "video/flv" });
	            player.play();
	            player.on('ended', function () {
	                console.log('awww...over so soon?');
	            });
	        });
	    };
	    return PlayerView;
	}(VueBase_1.VueBase));
	exports.PlayerView = PlayerView;
	exports.playerView = new PlayerView();


/***/ },

/***/ 53:
/***/ function(module, exports) {

	"use strict";
	var VueBase = (function () {
	    function VueBase() {
	        this.props = {};
	        this.methods = {};
	    }
	    VueBase.initProps = function (subClassObj) {
	        for (var key in subClassObj) {
	            var o = subClassObj[key];
	            if (o.hasOwnProperty("_")) {
	                if (o.hasOwnProperty("v")) {
	                    subClassObj.props[key] = o.v;
	                }
	                else if (o.hasOwnProperty("f")) {
	                    subClassObj.methods[key] = o.f;
	                }
	            }
	            else {
	                var isClsFunc = o instanceof Function;
	                if (isClsFunc) {
	                    subClassObj.methods[key] = o;
	                }
	            }
	        }
	    };
	    VueBase.prototype.created = function () {
	    };
	    VueBase.prototype.mounted = function () {
	    };
	    VueBase.PROP = { v: null, _: null };
	    VueBase.Dict = { v: {}, _: null };
	    VueBase.Number = { v: 0, _: null };
	    VueBase.String = { v: "", _: null };
	    return VueBase;
	}());
	exports.VueBase = VueBase;


/***/ },

/***/ 54:
/***/ function(module, exports) {

	module.exports = "<div class=\"PlayerVideoJS box\" style=\"width:260px;height:700px;padding:5;margin-right:5\">\r\n    <div class=\"row\">{{roomInfo.title}} <br>主播：{{roomInfo.mc}}\r\n    </div>\r\n    <video class=\"video-js vjs-default-skin\" controls width=\"250\" height=\"440\" data-setup=\"{}\">\r\n        </video>\r\n</div>";

/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Command_1 = __webpack_require__(56);
	var EventDispatcher_1 = __webpack_require__(57);
	var AccountInfo_1 = __webpack_require__(58);
	var TopicInfo_1 = __webpack_require__(59);
	var RoomInfo_1 = __webpack_require__(60);
	var DmkInfo_1 = __webpack_require__(61);
	var SettingModel = (function () {
	    function SettingModel() {
	        this.isShowRecVideo = false;
	    }
	    return SettingModel;
	}());
	var _proxy = function (url) {
	    return "/proxy?url=" + url;
	};
	var MonitorModel = (function (_super) {
	    __extends(MonitorModel, _super);
	    function MonitorModel() {
	        _super.call(this);
	        this.accountInfo = new AccountInfo_1.AccountInfo();
	        this.settingModel = new SettingModel();
	        this.playerMap = {};
	        this.wsMap = {};
	        this.dmkArrMap = {};
	        this.nameTokenMap = {};
	        this.liveMap = {};
	    }
	    MonitorModel.prototype.openChatWs = function (roomInfo, token, onMsgCallback) {
	        var _this = this;
	        var liveId = roomInfo.id;
	        var idx = MonitorModel.getWsIdx(liveId, token);
	        var wsMap = this.wsMap;
	        if (!wsMap[idx]) {
	        }
	        this.getLiveChatUrl(liveId, token, function (chatWsUrl) {
	            console.log('con ws ', chatWsUrl);
	            if (!wsMap[idx]) {
	                exports.monitorModel.dmkArrMap[idx] = "";
	                wsMap[idx] = new WebSocket(chatWsUrl);
	                wsMap[idx].binaryType = "arraybuffer";
	                wsMap[idx].onopen = function (evt) {
	                    console.log('websocket open');
	                };
	                wsMap[idx].funcArr = [onMsgCallback];
	                wsMap[idx].onmessage = function (evt) {
	                    var dmkMsg = DmkInfo_1.decodeMsg(evt.data);
	                    if (dmkMsg) {
	                        var dmkContent = dmkMsg.content;
	                        var dmkUser = dmkMsg.user.displayName;
	                        console.log("onWebSocketMsg", evt, dmkContent);
	                        if (dmkContent) {
	                            exports.monitorModel.dmkArrMap[idx] += "[" + dmkUser + "]:" + dmkContent + "\n";
	                            for (var i = 0; i < wsMap[idx].funcArr.length; i++) {
	                                var func = wsMap[idx].funcArr[i];
	                                func(exports.monitorModel.dmkArrMap[idx]);
	                            }
	                        }
	                    }
	                };
	                _this.emit(Command_1.CommandId.openWs);
	            }
	            else {
	                onMsgCallback(exports.monitorModel.dmkArrMap[idx]);
	                wsMap[idx].funcArr.push(onMsgCallback);
	            }
	        });
	    };
	    MonitorModel.prototype.getTopicLives = function (topicArr, callback) {
	        var for1 = function (idx, topicArr) {
	            if (idx < topicArr.length) {
	                exports.monitorModel.getLiveList(topicArr[idx].id, function (roomArr) {
	                    topicArr[idx].roomArr = roomArr;
	                    for (var k = 0; k < roomArr.length; k++) {
	                        var roomInfo = roomArr[k];
	                        var urlLen = roomInfo.rtmp.length;
	                        roomInfo.shortUrl = roomInfo.rtmp.substr(0, 30)
	                            + "..." + roomInfo.rtmp.substr(urlLen - 11, 11);
	                    }
	                    for1(idx + 1, topicArr);
	                });
	            }
	            else {
	                callback(topicArr);
	            }
	        };
	        for1(0, topicArr);
	    };
	    MonitorModel.prototype.getTopic = function (callback, cursor, topicArrPre) {
	        var _this = this;
	        var topicArr = [];
	        if (topicArrPre)
	            topicArr = topicArr.concat(topicArrPre);
	        var url1 = 'http://api.weilutv.com/1/topic/list';
	        console.log("getTopic");
	        $.ajax({
	            url: _proxy(url1),
	            type: 'POST',
	            dataType: 'json',
	            data: JSON.stringify({ cursor: cursor }),
	            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
	            success: function (body) {
	                onRes(body);
	            },
	            error: function (e) {
	                console.log(url1, e);
	            }
	        });
	        var onRes = function (body) {
	            var topics = body.result.topics;
	            var hasMore = body.result.cursor.hasMore;
	            var cursor = body.result.cursor;
	            if (body.success) {
	                for (var i = 0; i < topics.length; i++) {
	                    var obj = topics[i];
	                    var topicInfo = new TopicInfo_1.TopicInfo();
	                    topicInfo.id = obj.id;
	                    topicInfo.topic = obj.title;
	                    topicInfo.liveCount = obj.count.live;
	                    topicInfo.videoCount = obj.count.video;
	                    topicInfo.viewCount = obj.count.view;
	                    topicInfo.hasActiveLive = obj.hasActiveLive;
	                    topicArr.push(topicInfo);
	                }
	                if (hasMore) {
	                    _this.getTopic(callback, cursor, topicArr);
	                }
	                else {
	                    if (callback)
	                        callback(topicArr);
	                }
	            }
	            else
	                throw "get /1/topic/list failed";
	        };
	    };
	    ;
	    MonitorModel.prototype.getLiveChatUrl = function (liveId, token, callback) {
	        var url = "https://api.weilutv.com/1/live/" + liveId;
	        console.log("getLiveChatUrl", url);
	        $.ajax({
	            url: url,
	            type: 'GET',
	            headers: { Authorization: "Bearer " + token },
	            success: function (body) {
	                console.log('get Live chat', body);
	                var chatUrl = body.result.chat;
	                callback(chatUrl);
	            },
	            error: function (e) {
	                console.log(url, e);
	            }
	        });
	    };
	    MonitorModel.prototype.getLiveList = function (topicId, callback, cursor, roomArrPre) {
	        var _this = this;
	        var roomArr = [];
	        if (roomArrPre)
	            roomArr = roomArr.concat(roomArrPre);
	        var roomInfo;
	        var liveUrl = "https://api.weilutv.com/1/topic/" + topicId + "/live/live_list";
	        console.log(liveUrl, cursor, roomArr.length);
	        $.ajax({
	            url: _proxy(liveUrl),
	            type: 'POST',
	            dataType: 'json',
	            data: JSON.stringify({ cursor: cursor }),
	            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
	            success: function (body) {
	                onRes(body);
	            },
	            error: function (e) {
	                console.log(liveUrl, e);
	            }
	        });
	        var onRes = function (body) {
	            if (body.success) {
	                var lives = body.result.lives;
	                var hasMore = body.result.cursor.hasMore;
	                var cursor = body.result.cursor;
	                for (var j = 0; j < lives.length; j++) {
	                    var liveObj = lives[j];
	                    if (!_this.liveMap[liveObj.id])
	                        _this.liveMap[liveObj.id] = new RoomInfo_1.RoomInfo;
	                    roomInfo = _this.liveMap[liveObj.id];
	                    roomInfo.title = liveObj.title;
	                    roomInfo.mc = liveObj.user.displayName;
	                    roomInfo.rtmp = liveObj.playUrl;
	                    roomInfo.id = liveObj.id;
	                    roomInfo.topicId = topicId;
	                    roomArr.push(roomInfo);
	                }
	                console.log('get live:', liveObj);
	                if (hasMore) {
	                    _this.getLiveList(topicId, callback, cursor, roomArr);
	                }
	                else if (callback)
	                    callback(roomArr);
	            }
	            else
	                throw "get /live_list failed";
	        };
	    };
	    ;
	    MonitorModel.sendCommit = function (token, topicId, commit) {
	        var apiUrl = "https://api.weilutv.com/comment/t" + topicId + "/post/";
	    };
	    MonitorModel.getWsIdx = function (liveId, token) {
	        return liveId + ":" + token;
	    };
	    return MonitorModel;
	}(EventDispatcher_1.EventDispatcher));
	exports.MonitorModel = MonitorModel;
	exports.monitorModel = new MonitorModel();


/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var EventDispatcher_1 = __webpack_require__(57);
	(function (CommandId) {
	    CommandId[CommandId["ShowConsoleWin"] = 100000] = "ShowConsoleWin";
	    CommandId[CommandId["openWs"] = 100001] = "openWs";
	    CommandId[CommandId["beforeAcOpiontArr"] = 100002] = "beforeAcOpiontArr";
	    CommandId[CommandId["afterAcOpiontArr"] = 100003] = "afterAcOpiontArr";
	})(exports.CommandId || (exports.CommandId = {}));
	var CommandId = exports.CommandId;
	var CommandItem = (function () {
	    function CommandItem(id) {
	        this.id = id;
	    }
	    return CommandItem;
	}());
	var Command = (function (_super) {
	    __extends(Command, _super);
	    function Command() {
	        _super.call(this);
	        console.log("CommandId", CommandId);
	    }
	    return Command;
	}(EventDispatcher_1.EventDispatcher));
	exports.Command = Command;


/***/ },

/***/ 57:
/***/ function(module, exports) {

	"use strict";
	var EventDispatcher = (function () {
	    function EventDispatcher() {
	        this._func = {};
	        this._funcId = 0;
	    }
	    EventDispatcher.prototype.on = function (type, func) {
	        if (!this._func[type])
	            this._func[type] = [];
	        this._funcId++;
	        this._func[type].push({ func: func, id: this._funcId });
	    };
	    EventDispatcher.prototype.emit = function (type, param, broadcastId) {
	        if (param === void 0) { param = null; }
	        if (broadcastId === void 0) { broadcastId = null; }
	        if (this._func[type]) {
	            for (var i = 0; i < this._func[type].length; ++i) {
	                var f = this._func[type][i];
	                if (f)
	                    f.func(param);
	            }
	        }
	        if (this.broadcast && broadcastId)
	            this.broadcast(broadcastId, type, param);
	    };
	    EventDispatcher.prototype.proxy = function () {
	        var param = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            param[_i - 0] = arguments[_i];
	        }
	        throw new Error("no proxy method!!!");
	    };
	    ;
	    EventDispatcher.prototype.broadcast = function () {
	        var param = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            param[_i - 0] = arguments[_i];
	        }
	        throw new Error("no broadcast method!!!");
	    };
	    ;
	    EventDispatcher.prototype.del = function (type, funcId) {
	        if (funcId === void 0) { funcId = -1; }
	        if (this._func[type])
	            if (funcId < 0) {
	                this._func[type] = [];
	            }
	            else {
	                for (var i = 0; i < this._func[type].length; ++i) {
	                    var f = this._func[type][i];
	                    if (f) {
	                        if (f.id == funcId) {
	                            delete this._func[type][i];
	                            console.log('del event', type, funcId);
	                            break;
	                        }
	                    }
	                }
	            }
	    };
	    EventDispatcher.prototype.removeAll = function () {
	        this._func = {};
	    };
	    return EventDispatcher;
	}());
	exports.EventDispatcher = EventDispatcher;


/***/ },

/***/ 58:
/***/ function(module, exports) {

	"use strict";
	var AccountInfo = (function () {
	    function AccountInfo() {
	        this.userArr = [
	            { name: "20000000003", pw: "vl12450", token: '', displayName: '' },
	            { name: "20000000004", pw: "vl12450", token: '', displayName: '' }
	        ];
	        this.initConf();
	    }
	    AccountInfo.prototype._getMyProfile = function (token, callback) {
	        var url = "https://api.weilutv.com/1/my/profile";
	        $.ajax({
	            url: url,
	            type: 'GET',
	            headers: { Authorization: "Bearer " + token },
	            success: function (body) {
	                console.log('get Live chat');
	                var displayName = body.result.displayName;
	                callback(displayName);
	            },
	            error: function (e) {
	                console.log(url, e);
	            }
	        });
	    };
	    AccountInfo.prototype._getPassword = function (ac) {
	        for (var _i = 0, _a = this.userArr; _i < _a.length; _i++) {
	            var user = _a[_i];
	            if (user.name == ac) {
	                return user.pw;
	            }
	        }
	        return "";
	    };
	    AccountInfo.prototype.getDisplayName = function (ac) {
	        for (var _i = 0, _a = this.userArr; _i < _a.length; _i++) {
	            var user = _a[_i];
	            if (user.name == ac) {
	                return user.displayName;
	            }
	        }
	        return "";
	    };
	    AccountInfo.prototype.login = function (ac, pw, callback) {
	        var _this = this;
	        var url = 'https://api.weilutv.com/1/account/login';
	        if (!pw) {
	            pw = this._getPassword(ac);
	        }
	        $.ajax({
	            url: url,
	            type: 'POST',
	            dataType: 'json',
	            data: JSON.stringify({ username: ac, password: pw }),
	            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
	            success: function (body) {
	                onRes(body);
	            },
	            error: function (e) { console.log(url, e); }
	        });
	        var onRes = function (body) {
	            console.log("login res:", body);
	            if (body.success) {
	                var token_1 = body.result.token;
	                _this._getMyProfile(token_1, function (displayName) {
	                    _this._updateToken(ac, pw, token_1, displayName);
	                    callback(token_1);
	                });
	            }
	            else
	                throw "login failed";
	        };
	    };
	    AccountInfo.prototype.initConf = function () {
	    };
	    AccountInfo.prototype._updateToken = function (name, pw, token, displayName) {
	        var isExist = false;
	        for (var i = 0; i < this.userArr.length; i++) {
	            var acObj = this.userArr[i];
	            if (acObj.name == name) {
	                acObj.token = token;
	                acObj.displayName = displayName;
	                isExist = true;
	                break;
	            }
	        }
	        if (!isExist) {
	            this.userArr.push({ name: name, pw: pw, token: token, displayName: displayName });
	        }
	    };
	    return AccountInfo;
	}());
	exports.AccountInfo = AccountInfo;


/***/ },

/***/ 59:
/***/ function(module, exports) {

	"use strict";
	var TopicInfo = (function () {
	    function TopicInfo() {
	    }
	    return TopicInfo;
	}());
	exports.TopicInfo = TopicInfo;


/***/ },

/***/ 60:
/***/ function(module, exports) {

	"use strict";
	var RoomInfo = (function () {
	    function RoomInfo() {
	    }
	    return RoomInfo;
	}());
	exports.RoomInfo = RoomInfo;


/***/ },

/***/ 61:
/***/ function(module, exports) {

	"use strict";
	var Message;
	var Danmaku;
	protobuf.load("/pb/live_websocket.proto", function (err, root) {
	    if (err)
	        throw err;
	    Message = root.lookup("Message");
	    Danmaku = root.lookup("Danmaku");
	});
	exports.packDmk = function (content, user) {
	    var dmkMsg = new Danmaku();
	    dmkMsg.content = content;
	    var msg = new Message();
	    msg.content = dmkMsg.encode().toArrayBuffer();
	    msg.type = 20;
	    msg.timestamp = new Date().getTime();
	    var byteBuffer = msg.encode();
	    return byteBuffer.toArrayBuffer();
	};
	exports.decodeMsg = function (msgBuf) {
	    var msg = Message.decode(msgBuf);
	    if (msg.type == 20) {
	        var dmk = Danmaku.decode(msg.content);
	        console.log(dmk);
	        return dmk;
	    }
	};
	var Danmaku2 = (function () {
	    function Danmaku2() {
	    }
	    Danmaku2.prototype.pack = function () {
	    };
	    return Danmaku2;
	}());
	exports.Danmaku2 = Danmaku2;


/***/ },

/***/ 62:
/***/ function(module, exports) {

	"use strict";
	function ascendingProp(prop) {
	    return function (a, b) {
	        return a[prop] - b[prop];
	    };
	}
	exports.ascendingProp = ascendingProp;
	function descendingProp(prop) {
	    return function (a, b) {
	        return b[prop] - a[prop];
	    };
	}
	exports.descendingProp = descendingProp;
	function mapToSortArray(map, prop, sortFunc) {
	    var arr = [];
	    for (var k in map) {
	        arr.push(map[k]);
	    }
	    arr.sort(sortFunc(prop));
	    return arr;
	}
	exports.mapToSortArray = mapToSortArray;
	function mapToArr(map) {
	    var a = [];
	    for (var k in map) {
	        a.push(map[k]);
	    }
	    return a;
	}
	exports.mapToArr = mapToArr;
	function arrCountSame(arrA, arrB) {
	    var n = 0;
	    for (var i = 0; i < arrB.length; i++) {
	        var obj = arrB[i];
	        if (arrA.indexOf(obj) > -1) {
	            n++;
	        }
	    }
	    return n;
	}
	exports.arrCountSame = arrCountSame;
	function arrUniqueFilter(el, i, a) {
	    return i == a.indexOf(el);
	}
	exports.arrUniqueFilter = arrUniqueFilter;
	function loadImg(path1, callback) {
	    var img = new Image();
	    img.onload = callback;
	    img.src = path1;
	}
	exports.loadImg = loadImg;
	function loadImgArr(pathArr, callback) {
	    var count = pathArr.length;
	    function onLoadImg() {
	        count--;
	        if (count === 0)
	            callback();
	    }
	    for (var i = 0; i < pathArr.length; i++) {
	        var p = pathArr[i];
	        var img = new Image();
	        img.onload = onLoadImg;
	        img.src = p;
	    }
	}
	exports.loadImgArr = loadImgArr;
	function combineArr(arr, num) {
	    var r = [];
	    (function f(t, a, n) {
	        if (n == 0) {
	            return r.push(t);
	        }
	        for (var i = 0, l = a.length; i <= l - n; i++) {
	            f(t.concat(a[i]), a.slice(i + 1), n - 1);
	        }
	    })([], arr, num);
	    return r;
	}
	exports.combineArr = combineArr;
	function formatSecond(sec, minStr, secStr) {
	    if (minStr === void 0) { minStr = ":"; }
	    if (secStr === void 0) { secStr = ""; }
	    var min = Math.floor(sec / 60);
	    var s = sec % 60;
	    var strMin = min + "";
	    var strSec = s + "";
	    if (min < 10)
	        strMin = "0" + strMin;
	    if (s < 10)
	        strSec = "0" + strSec;
	    return strMin + minStr + strSec + secStr;
	}
	exports.formatSecond = formatSecond;
	function getLength(str) {
	    var realLength = 0, len = str.length, charCode = -1;
	    for (var i = 0; i < len; i++) {
	        charCode = str.charCodeAt(i);
	        if (charCode >= 0 && charCode <= 128)
	            realLength += 1;
	        else
	            realLength += 2;
	    }
	    return realLength;
	}
	exports.getLength = getLength;
	function cnWrap(str, len, start) {
	    if (start === void 0) { start = 0; }
	    var str_line_length = 0;
	    var str_len = str.length;
	    var str_cut = new String();
	    var str_out = '';
	    for (var i = start; i < str_len; i++) {
	        var a = str.charAt(i);
	        str_line_length++;
	        if (escape(a).length > 4) {
	            str_line_length++;
	        }
	        str_cut = str_cut.concat(a);
	        if (str_line_length >= len) {
	            str_out += str_cut.concat('\n');
	            str_cut = new String();
	            str_line_length = 0;
	        }
	    }
	    str_out += str_cut;
	    return str_out;
	}
	exports.cnWrap = cnWrap;


/***/ },

/***/ 63:
/***/ function(module, exports) {

	module.exports = "<aside class=\"menu\">\r\n    <p class=\"menu-label\">\r\n        话题\r\n    </p>\r\n    <ul class=\"menu-list\">\r\n        <li v-for=\"(topic,index) in topicArr\">\r\n            <a href=\"#\" @click=\"onSelectTopic(topic.id)\">{{topic.topic}}</a>\r\n        </li>\r\n    </ul>\r\n\r\n    <div style=\"position: absolute;\r\n         display: inline-flex;\r\n         left: 270px;top:55px;\">\r\n        <vue v-for=\"(roomInfo, index) in playerArr\">\r\n            <player :idx=\"index\" :roomInfo='roomInfo'>\r\n            </player>\r\n        </vue>\r\n    </div>\r\n\r\n    <div style=\"overflow-y: scroll\">\r\n        <div id=\"roomList\" class=\"collection box\" style=\"position: absolute;left: 70px;top:60px;width: 800px;z-index: 999;display:none\">\r\n            <li v-for=\"(roomInfo,index) in roomArr\">\r\n                <div class=\"row\">{{roomInfo.title}} [{{roomInfo.mc}}]\r\n                    <a href=\"#\" @click=\"onOpenRoom(roomInfo)\" title=\"打开直播\">{{ roomInfo.shortUrl}}</a>\r\n                </div>\r\n            </li>\r\n        </div>\r\n    </div>\r\n</aside>";

/***/ }

/******/ });
//# sourceMappingURL=walue.js.map