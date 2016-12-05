import { VueBase } from '../../../utils/VueBase';
declare let videojs;
export class PlayerView extends VueBase {
    template = require('./player.html')
    roomInfo = VueBase.PROP
    idx = VueBase.PROP
    constructor() {
        super();
        VueBase.initProps(this);
    }
    protected created() {
        console.log("created player:", this.idx, this.roomInfo)
    }

    protected mounted() {
        let playerId = 'player' + this.roomInfo.id;
        // playerId = 'player1'
        console.log("mounted player",playerId)
        let $player = $(this.$el).find('video').attr('id',playerId)
        var player = videojs(playerId, {
            // controls: true,
            autoplay: true
        }, () => {
            console.log('Good to go!');
            // let url1 = "rtmp://rtmp.icassi.us/live/test3"
            let url1 = this.roomInfo.rtmp
            player.src({ src: url1, type: "video/flv"});
            // player.src({ src: url1, type: "application/x-mpegurl" });
            // player.src({ src: url1, type: "rtmp/mp4"});
            // player.src({ src: url1, type: "rtmp/mp4", useCueTags: true });
            player.play(); // if you don't trust autoplay for some reason
            // How about an event listener?
            player.on('ended', function () {
                console.log('awww...over so soon?');
            });
        });
    }
}
export let playerView = new PlayerView()