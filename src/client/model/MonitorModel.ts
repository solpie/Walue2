import { Command, CommandId } from './Command';
import { EventDispatcher } from '../utils/EventDispatcher';
import { format } from 'path';
import { AccountInfo } from './AccountInfo';
import { TopicInfo } from "./TopicInfo";
import { RoomInfo } from "./RoomInfo";
import { decodeMsg } from "./DmkInfo";
declare let $;
class SettingModel {
    isShowRecVideo: boolean = false;
}
let _proxy = (url) => {
    return "/proxy?url=" + url
}
export class MonitorModel extends EventDispatcher {
    settingModel;
    playerMap;
    liveMap;
    wsMap;
    dmkArrMap;
    nameTokenMap
    accountInfo = new AccountInfo();

    constructor() {
        super()
        this.settingModel = new SettingModel();
        this.playerMap = {};
        this.wsMap = {};
        this.dmkArrMap = {};
        this.nameTokenMap = {}
        this.liveMap = {}
    }

    //连接弹幕服务器
    openChatWs(roomInfo: RoomInfo, token, onMsgCallback) {
        let liveId = roomInfo.id;
        let idx = MonitorModel.getWsIdx(liveId, token)
        let wsMap = this.wsMap;
        if (!wsMap[idx]) {

        }
        this.getLiveChatUrl(liveId, token, (chatWsUrl) => {
            console.log('con ws ', chatWsUrl)
            if (!wsMap[idx]) {
                monitorModel.dmkArrMap[idx] = "";
                wsMap[idx] = new WebSocket(chatWsUrl);
                wsMap[idx].binaryType = "arraybuffer";
                wsMap[idx].onopen = function (evt) {
                    console.log('websocket open');
                };
                wsMap[idx].funcArr = [onMsgCallback];
                wsMap[idx].onmessage = (evt) => {
                    var dmkMsg = decodeMsg(evt.data);
                    if (dmkMsg) {
                        let dmkContent = dmkMsg.content;
                        let dmkUser = dmkMsg.user.displayName;
                        console.log("onWebSocketMsg", evt, dmkContent);
                        if (dmkContent) {
                            monitorModel.dmkArrMap[idx] += `[${dmkUser}]:${dmkContent}\n`
                            for (var i = 0; i < wsMap[idx].funcArr.length; i++) {
                                var func = wsMap[idx].funcArr[i];
                                func(monitorModel.dmkArrMap[idx]);
                            }
                        }
                    }
                };
                this.emit(CommandId.openWs)
            }
            else {
                onMsgCallback(monitorModel.dmkArrMap[idx]);
                wsMap[idx].funcArr.push(onMsgCallback);
            }
        })
    }

    getTopicLives(topicArr, callback) {
        var for1 = (idx, topicArr) => {
            if (idx < topicArr.length) {
                monitorModel.getLiveList(topicArr[idx].id, (roomArr) => {
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
    }

    getTopic(callback?, cursor?, topicArrPre?) {
        var topicArr = [];
        if (topicArrPre)
            topicArr = topicArr.concat(topicArrPre);
        let url1 = 'http://api.weilutv.com/1/topic/list'
        console.log("getTopic")

        $.ajax({
            url: _proxy(url1),
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify({ cursor: cursor }),
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            success: (body) => {
                // console.log(body);
                onRes(body)
            },
            error: (e) => {
                console.log(url1, e)
            }
        });

        let onRes = (body) => {
            var topics = body.result.topics;
            var hasMore = body.result.cursor.hasMore;
            var cursor = body.result.cursor;
            if (body.success) {
                // console.log(topics[0]);
                for (var i = 0; i < topics.length; i++) {
                    var obj = topics[i];
                    var topicInfo = new TopicInfo();
                    topicInfo.id = obj.id;
                    topicInfo.topic = obj.title;
                    topicInfo.liveCount = obj.count.live;
                    topicInfo.videoCount = obj.count.video;
                    topicInfo.viewCount = obj.count.view;
                    topicInfo.hasActiveLive = obj.hasActiveLive;
                    // console.log('hasActiveLive', topicInfo.hasActiveLive, topicInfo.id);
                    topicArr.push(topicInfo);
                    // console.log('topic id', obj.id, obj);
                }
                // console.log("topic", obj);
                if (hasMore) {
                    this.getTopic(callback, cursor, topicArr);
                }
                else {
                    if (callback)
                        callback(topicArr)
                }
            }
            else throw "get /1/topic/list failed";
        }
    };


    getLiveChatUrl(liveId, token, callback) {
        let url = `https://api.weilutv.com/1/live/${liveId}`
        // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTEyNDU1NzUsImp0aSI6IjMzIiwiaWF0IjoxNDc5NzA5NTc1fQ.QEip_3zzPYFj1hlwIdLzJYqKDI9pQroEPEEEugl06tk"
        console.log("getLiveChatUrl", url)
        $.ajax({
            url: url,
            type: 'GET',
            headers: { Authorization: `Bearer ${token}` },
            success: (body) => {
                console.log('get Live chat', body)
                let chatUrl = body.result.chat
                callback(chatUrl)
            },
            error: (e) => {
                console.log(url, e)
            }
        });
    }


    getLiveList(topicId, callback?, cursor?, roomArrPre?) {
        var roomArr = [];
        if (roomArrPre)
            roomArr = roomArr.concat(roomArrPre);
        var roomInfo: RoomInfo;
        var liveUrl = `https://api.weilutv.com/1/topic/${topicId}/live/live_list`;
        console.log(liveUrl, cursor, roomArr.length);
        // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTEyMzUyMzcsImp0aSI6IjMzIiwiaWF0IjoxNDc5Njk5MjM3fQ.f2VCeGcwe3JxQGidwWTfUSSOFt1QqX9pQ1f4FwBG60o"
        $.ajax({
            url: _proxy(liveUrl),
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify({ cursor: cursor }),
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            success: (body) => {
                onRes(body)
            },
            error: (e) => {
                console.log(liveUrl, e)
            }
        });

        let onRes = (body) => {
            if (body.success) {
                var lives = body.result.lives;
                var hasMore = body.result.cursor.hasMore;
                var cursor = body.result.cursor;
                for (var j = 0; j < lives.length; j++) {
                    var liveObj = lives[j];
                    if (!this.liveMap[liveObj.id])
                        this.liveMap[liveObj.id] = new RoomInfo;
                    // this.liveMap[liveObj.id] ? roomInfo = this.liveMap[liveObj.id] : this.liveMap[liveObj.id] = new RoomInfo;
                    roomInfo = this.liveMap[liveObj.id]
                    roomInfo.title = liveObj.title;
                    roomInfo.mc = liveObj.user.displayName;
                    roomInfo.rtmp = liveObj.playUrl;
                    roomInfo.id = liveObj.id;
                    roomInfo.topicId = topicId
                    // roomInfo.chat = liveObj.chat;
                    roomArr.push(roomInfo);
                }
                console.log('get live:', liveObj);
                if (hasMore) {
                    this.getLiveList(topicId, callback, cursor, roomArr)
                }
                else if (callback)
                    callback(roomArr);
            }
            else throw "get /live_list failed";
        }
    };

    static sendCommit(token, topicId, commit) {
        var apiUrl = `https://api.weilutv.com/comment/t${topicId}/post/`;
        // unirest.post(apiUrl)
        //     .headers({ 'Accept': 'application/json', 'Content-Type': 'application/json', token: token })
        //     .send({ content: commit })
        //     .end((res) => {
        //         // console.log(res2.body);
        //         if (res.body.success) {
        //         }
        //         else throw "error " + apiUrl;
        //     });

        // POST /comment/t123/post
        // {"content": "nihao"}
    }

    static getWsIdx(liveId, token): string {
        return liveId + ":" + token
    }
}
export var monitorModel = new MonitorModel();
