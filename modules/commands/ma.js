const fs = require("fs");
module.exports.config = {
name: "ma",
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
	if (event.body.indexOf("Ma")==0 || (event.body.indexOf("ma")==0)) {
		var msg = {
				body: " úi ma  !",
				attachment: fs.createReadStream(__dirname + `/noprefix/ma.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}