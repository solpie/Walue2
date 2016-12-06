import { packDmk } from '../../../model/DmkInfo';
import { RoomInfo } from '../../../model/RoomInfo';
import { CommandId } from '../../../model/Command';
import { monitorModel, MonitorModel } from '../../../model/MonitorModel';
import { VueBase } from '../../../utils/VueBase';
declare let videojs;
export class PlayerView extends VueBase {
    template = require('./player.html')
    roomInfo = VueBase.PROP
    idx = VueBase.PROP
    player: any
    dmkArr = VueBase.PROP
    dmkContent = VueBase.PROP
    isShowAclist = VueBase.PROP
    userArr = VueBase.PROP

    constructor() {
        super();
        VueBase.initProps(this);
    }
    protected created() {
        console.log("created player:", this.idx, this.roomInfo)
    }

    makeWs(token) {
        console.log("makeWs", token)
        let wsIdx = MonitorModel.getWsIdx(this.roomInfo.id, token)
        var ws = monitorModel.wsMap[wsIdx];
        if (!ws) {
            monitorModel.openChatWs(this.roomInfo, token, this.onDmkArrUpdate)
        }
    }

    onDmkArrUpdate(v) {
        console.log("onDmkArrUpdate", v);
        this.dmkArr = v;
        var $textarea = $(this.$el).find("textarea")[0];
        $textarea.scrollTop = $textarea.scrollHeight;
    }

    protected mounted() {

        let playerId = 'player' + this.roomInfo.id;
        console.log("mounted player", playerId)
        let $player = $(this.$el).find('video').attr('id', playerId)
        var player = videojs(playerId, {
            // controls: true,
            autoplay: true,
            autoHeight: true,
            controlBar: {
                progressControl: false,
                remainingTimeDisplay: false,
                durationDisplay: false
            }
        }, () => {
            console.log('Good to go!');
            // let url1 = "rtmp://rtmp.icassi.us/live/test3"
            let url1 = this.roomInfo.rtmp
            player.src({ src: url1, type: "video/flv" });
            // player.src({ src: url1, type: "rtmp/mp4"});
            // player.src({ src: url1, type: "rtmp/mp4", useCueTags: true });
            player.play(); // if you don't trust autoplay for some reason
            // How about an event listener?
            player.on('ended', function () {
                console.log('awww...over so soon?');
            });

            player.on('play', () => {
                console.log('on play');
                
                player.height = 440

            })
        });
        this.player = player

    }
    protected methods = {
        onClose() {
            console.log("onClose", this.player);
            this.player.dispose();
            $(this.$el).empty()
            $(this.$el).hide()
        },
        onClkAc() {
            this.userArr = monitorModel.accountInfo.userArr || store.get('userArr')
            this.isShowAclist = true;
        },
        onInputEnter(e) {
            console.log('onEnter', e);
            if (e.keyIdentifier && e.keyIdentifier == "Enter") {
                // if (e.key && e.key == "Enter" && e.ctrlKey) {
                this.onSendDmk();
            }
        },
        onSendDmk() {
            console.log('onSendDmk', this.roomInfo, this.dmkContent, monitorModel.nameTokenMap, monitorModel.wsMap);
            // var acObj = this.acSelected
            var ac = this.roomInfo.selAc
            if (ac) {
                let token = monitorModel.nameTokenMap[ac]
                let wsIdx = MonitorModel.getWsIdx(this.roomInfo.id, token)
                var ws = monitorModel.wsMap[wsIdx];
                console.log('getWsIdx', ws, wsIdx);
                if (ws) {
                    let roomInfo: RoomInfo = monitorModel.liveMap[this.roomInfo.id]
                    // roomInfo.tmpWsIdx = wsIdx
                    // console.log("selAc", roomInfo.selAc)
                    var dmk = this.dmkContent;
                    this.dmkContent = '';
                    if (dmk.length > 0 && dmk[0] != " ") {
                        var packMsg = packDmk(dmk, null);
                        ws.send(packMsg);
                    }
                }
                else {
                    alert('发送失败：请登录');
                }
            }
        },
        onSelAc(ac) {
            this.isShowAclist = false
            console.log('onSelAc', ac)
            this.roomInfo.selAc = ac
            var token = monitorModel.nameTokenMap[ac];
            if (!token) {
                monitorModel.accountInfo.login(ac, null, (loginToken) => {
                    monitorModel.nameTokenMap[ac] = loginToken
                    monitorModel.openChatWs(this.roomInfo, loginToken, this.onDmkArrUpdate)
                    this.roomInfo.displayName = monitorModel.accountInfo.getDisplayName(ac)
                })
            } else {
                this.roomInfo.displayName = monitorModel.accountInfo.getDisplayName(ac)
                this.makeWs(token)
            }
        },
    }
}
export let playerView = new PlayerView()
