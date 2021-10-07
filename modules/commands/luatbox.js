module.exports.config = {
	name: "luật",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HelyT",
	description: "Thông tin nhà tài trợ và nhà phát triển",
	commandCategory: "Info", 
	usages: "gioithieu [thông tin cho bạn]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage(" Về cá nhân\n -Tôn trọng tất cả tv và qtv ( kính trên nhường dưới )\n -Nói không với FB clone , FAKE ảnh người khác\n -Không dùng phần mềm t3 ( HACK , WAR , MOD ,....)\n -Gặp vấn đề , sự cố ... vui lòng thông báo cho qtv để được xử lí\n -Có trách nhiệm với lời nói và hành động của mình OK ?\n Về tin nhắn\n -Hạn chế đưa một tập thể , cá nhân ngoài clan ra bàn luận.\n -Không spam tin nhắn trong box chat\n -Hạn chế sử dụng những ngôn từ phản cảm , tục tĩu , 18+\n -Không chụp tin nhắn riêng trong box chat phát tán ra ngoài.",event.threadID, event.messageID);
	}
}