import { PlayerView, playerView } from './Player';
import { RoomInfo } from '../../../model/RoomInfo';
import { MonitorModel } from '../../../model/MonitorModel';
import { descendingProp } from '../../../utils/JsFunc';
import { VueBase } from '../../../utils/VueBase';
export let monitorModel = new MonitorModel();
class MonitorView extends VueBase {
    template = require('./monitor.html')
    topicArr = VueBase.PROP
    roomArr = VueBase.PROP
    playerArr = VueBase.PROP

    components = {
        'Player': playerView,
    }
    constructor() {
        super();
        VueBase.initProps(this);
    }
    protected created() {
        console.log("created");
    }
    protected mounted() {
        this.playerArr = []
        // let r = new RoomInfo()
        // r.rtmp = 'rtmp://rtmp.icassi.us/live/test'
        // this.playerArr.push(r)
        console.log("mounted");
        this.getTopicInfo()
    }
    protected methods = {
        onSelectTopic(topicId) {
            console.log("onSelectTopic:", topicId);
            monitorModel.getLiveList(topicId, (roomArr) => {
                this.roomArr = roomArr;
                for (var i = 0; i < this.roomArr.length; i++) {
                    var roomInfo = this.roomArr[i];
                    var urlLen = roomInfo.rtmp.length;
                    roomInfo.shortUrl = roomInfo.rtmp.substr(0, 30)
                        + "..." + roomInfo.rtmp.substr(urlLen - 11, 11);
                }
                console.log('roomArr', this.roomArr);
                // this.initWCPlayer();
                $('#roomList').show()
            });
        },
        onOpenRoom(roomInfo: RoomInfo) {
            console.log(roomInfo);
            // if (!this.playerArr)
            //     this.playerArr = []
            this.playerArr.push(roomInfo)
            $('#roomList').hide()
        },
    }

    getTopicInfo() {
        monitorModel.getTopic((topicInfoArr) => {
            var a = topicInfoArr.sort(descendingProp('liveCount'));
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
            if (monitorModel.settingModel.isShowRecVideo)
                this.topicArr = actTopic.concat(disActTopic);
            else
                this.topicArr = actTopic.concat();
            // this.topicArr = actTopic.concat(disActTopic);
            console.log('topicInfo', this.topicArr);
        });
    }


}
export let monitorView = new MonitorView()