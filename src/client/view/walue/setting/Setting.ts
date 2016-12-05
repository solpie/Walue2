import { monitorModel, MonitorModel } from '../../../model/MonitorModel';
import { VueBase } from '../../../utils/VueBase';
class SettingView extends VueBase {
    isShowRecVideo = VueBase.PROP
    acText = VueBase.PROP
    userArr = VueBase.PROP

    template = require('./setting.html')
    constructor() {
        super();
        VueBase.initProps(this);
    }
    protected watch = {
        isShowRecVideo: 'onIsShowRecVideo'
    }
    protected mounted() {
        console.log('SettingView mounted');
        this.isShowRecVideo = monitorModel.settingModel.isShowRecVideo
        this.userArr = monitorModel.accountInfo.userArr
    }
    protected methods = {
        onIsShowRecVideo(v) {
            monitorModel.settingModel.isShowRecVideo = this.isShowRecVideo;
            console.log('onIsShowRecVideo', v);
        },
        onSaveAc() {
            let lines = this.acText.split('\n')
            let userArr = []
            for (let l of lines) {
                let a = l.split(' ')
                userArr.push({ name: a[1], pw: a[3], token: '', displayName: '' })
            }
            this.userArr = userArr
            if (userArr.length) {
                store.set('userArr', userArr)
                console.log('onSaveAc', userArr);
            }
            else
                alert("格式不对！")
        },
    }
};
export let settingView: SettingView = new SettingView()