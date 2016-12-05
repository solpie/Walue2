// var unirest = require('unirest');
declare let $;
export class AccountInfo {
    userArr = [
        { name: "20000000003", pw: "vl12450", token: '', displayName: '' },
        { name: "20000000004", pw: "vl12450", token: '', displayName: '' }
    ];
    lastToken;
    constructor() {
        this.initConf()
    }
    _getMyProfile(token: string, callback) {
        let url = `https://api.weilutv.com/1/my/profile`
        $.ajax({
            url: url,
            type: 'GET',
            headers: { Authorization: `Bearer ${token}` },
            success: (body) => {
                console.log('get Live chat')
                let displayName = body.result.displayName
                callback(displayName)
            },
            error: (e) => {
                console.log(url, e)
            }
        });
    }
    _getPassword(ac): string {
        for (var user of this.userArr) {
            if (user.name == ac) {
                return user.pw;
            }
        }
        return "";
    }
    getDisplayName(ac): string {
        for (var user of this.userArr) {
            if (user.name == ac) {
                return user.displayName;
            }
        }
        return "";
    }
    login(ac, pw?, callback?) {
        let url = 'https://api.weilutv.com/1/account/login'
        if (!pw) {
            pw = this._getPassword(ac)
        }

        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify({ username: ac, password: pw }),
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            success: (body) => {
                onRes(body)
            },
            error: (e) => { console.log(url, e) }
        });
        let onRes = (body) => {
            console.log("login res:", body);
            if (body.success) {
                let token = body.result.token
                this._getMyProfile(token, (displayName) => {
                    this._updateToken(ac, pw, token, displayName);
                    callback(token)
                })
            }
            else throw "login failed";
        }
    }

    initConf() {
        // this.userArr = []
        // var lineReader = require('readline').createInterface({
        //     input: require('fs').createReadStream('resources/app/user.conf')
        // });

        // lineReader.on('line', (line) => {
        //     let a = line.split(" ")
        //     this.userArr.push({ name: a[1], pw: a[3], token: '', displayName: '' })
        // })
        //     .on('close', () => {
        //         if (this.userArr.length) {
        //             let firstAc = this.userArr[0]
        //             this.login(firstAc.name, firstAc.pw, (token) => {
        //                 this.lastToken = token;
        //             })
        //         }
        //         console.log('user.conf', this.userArr)
        //     });

    }
    _updateToken(name, pw, token, displayName) {
        var isExist = false;
        for (var i = 0; i < this.userArr.length; i++) {
            var acObj = this.userArr[i];
            if (acObj.name == name) {
                acObj.token = token;
                acObj.displayName = displayName
                isExist = true;
                break;
            }
        }
        if (!isExist) {
            this.userArr.push({ name: name, pw: pw, token: token, displayName: displayName });
        }
    }
}