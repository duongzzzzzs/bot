module.exports.config = {
name: "khoe ngực",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "khoe ngực",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("khoe ngực")==0 || (event.body.indexOf("Khoe ngực")==0)) {
		var msg = {
				body: "Bỏ tay ra khỏi quần đê -_- ",
				attachment: fs.createReadStream(__dirname + `/noprefix/khoenguc.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}