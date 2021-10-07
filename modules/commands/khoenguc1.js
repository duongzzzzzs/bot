module.exports.config = {
name: "1khoe ngực",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "1khoe ngực",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("1khoe ngực")==0 || (event.body.indexOf("1Khoe ngực")==0)) {
		var msg = {
				body: "Bỏ tay ra khỏi quần đê -_- ",
				attachment: fs.createReadStream(__dirname + `/noprefix/khoenguc1.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}