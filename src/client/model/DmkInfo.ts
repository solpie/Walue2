declare let protobuf;
var Message;
var Danmaku;
protobuf.load("/pb/live_websocket.proto", function (err, root) {
    if (err) throw err;
    // // Obtain a message type
    Message = root.lookup("Message")
    Danmaku = root.lookup("Danmaku")
    // console.log(root, Danmaku, Message);

    // var AwesomeMessage = root.lookup("awesomepackage.AwesomeMessage");
    // // Create a new message
    // var message = AwesomeMessage.create({ awesomeField: "AwesomeString" });

    // // Encode a message (note that reflection encodes to a writer and we need to call finish)
    // var buffer = AwesomeMessage.encode(message).finish();
    // // ... do something with buffer

    // // Or, encode a plain object (note that reflection encodes to a writer and we need to call finish)
    // var buffer = AwesomeMessage.encode({ awesomeField: "AwesomeString" }).finish();
    // // ... do something with buffer
    // // Decode a buffer
    // var message = AwesomeMessage.decode(buffer);
});
// var dmk = new root.LiveEventBroadcast();
// console.log('dmk pb', dmk);
export var packDmk = (content, user) => {
    var dmkMsg = new Danmaku();
    dmkMsg.content = content;
    // dmkMsg.encode().toArrayBuffer();
    var msg = new Message();
    msg.content = dmkMsg.encode().toArrayBuffer();
    msg.type = 20;
    msg.timestamp = new Date().getTime();
    // dmkMsg.user.id = user.id;
    // dmkMsg.user.avatar = user.avatar;
    // dmkMsg.user.displayName = user.displayName;
    var byteBuffer = msg.encode();
    return byteBuffer.toArrayBuffer();
};

export var decodeMsg = (msgBuf) => {
    var msg = Message.decode(msgBuf);
    // console.log(msg);
    if (msg.type == 20) {
        var dmk = Danmaku.decode(msg.content);
        console.log(dmk);
        return dmk;
    }
};

export class Danmaku2 {
    content: string;
    id: string;
    avatar: string;
    displayName: string;

    constructor() {

    }

    pack() {

    }
}