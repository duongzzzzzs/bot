const fs = require("fs");
module.exports.config = {
name: "nhún",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Duck",
	description: " bạn là nhất r :))",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat bạn là nhất",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Nhún")==0 || (event.body.indexOf("nhún")==0)) {
		var msg = {
				body: " Wá Đark  !",
				attachment: fs.createReadStream(__dirname + `/noprefix/nhún.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}