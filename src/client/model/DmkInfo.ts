declare let protobuf;
var Message;
var Danmaku;
protobuf.load("/pb/live_websocket.proto", (err, root) => {
    if (err) throw err;
    // // Obtain a message type
    Message = root.lookup("Message")
    Danmaku = root.lookup("Danmaku")
    console.log(root, Danmaku, Message);
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
export var packDmk = (content, user) => {
    var dmkMsg = Danmaku.create({ content: content });
    var msg = Message.create({ content: Danmaku.encode(dmkMsg).finish(), type: 20, timestamp: new Date().getTime() });
    return Message.encode(msg).finish();
};
function toBuffer(ab) {
    var buf = new Buffer(ab.byteLength);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        buf[i] = view[i];
    }
    return buf;
}
export var decodeMsg = (msgBuf1) => {
    let msgBuf = toBuffer(msgBuf1)
    console.log('msgBuf:', msgBuf);
    var msg = Message.decode(msgBuf);
    console.log('decodeMsg:', msg);
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