module.exports = {
    config: {
        name: "sticker",
        version: "1.0",
        credits: "Quýt",
        description: "Test lệnh",
        tag: "bot",
        usage: "",
        countDown: 1000,
        role: 3,
    },
    

   
    anyEvent: async function (api, event) {
    api.sendMessage({
        msg: "ok",
        quote: event
    }, event.threadId, event.type);

    api.getStickers("hello").then(async (stickerIds) => {
        // Get the first sticker
        const stickerObject = await api.getStickersDetail(stickerIds[0]);
        api.sendMessageSticker(
            stickerObject,
            message.threadId,
            message.type, // MessageType.DirectMessage or MessageType.GroupMessage
        );
    });
    }
   

    
};