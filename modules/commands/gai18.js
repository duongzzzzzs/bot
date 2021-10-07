const request = require("request");

const fs = require("fs")

const axios = require("axios")

module.exports.config = {

  name: "gái18",

  version: "1.0.0",

  hasPermssion: 0,

  credits: "Thanh Dz",

  description: "Ảnh Gái 18+ Hot nhất ",

  commandCategory: "Hình Ảnh",

  usages: "gái18",

  cooldowns: 5,

  dependencies: ["request","fs","axios"]

};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {

	var link = [ 
	   "https://imgur.com/YabRD8L.jpg",
       "https://imgur.com/Qr7Hwl4.jpg",
       "https://imgur.com/YabRD8L.jpg",
       "https://imgur.com/7cQYUzO.jpg",
       "https://imgur.com/SqR2MWI.jpg",
       "https://imgur.com/NfaUv9r.jpg",
       "https://imgur.com/pHiVTJu.jpg",
       "https://imgur.com/yaxvmsm.jpg",
       "https://imgur.com/gnr1iDH.jpg",
       "https://imgur.com/MdYRBOs.jpg",
       "https://imgur.com/IUM22hJ.jpg",
       "https://imgur.com/YVBp95K.jpg",
       "https://imgur.com/CPixV9o.jpg",
       "https://imgur.com/mv1dUMo.jpg",
       "https://imgur.com/ynfrqRU.jpg",
       "https://imgur.com/LKeis8T.jpg",
       "https://imgur.com/qUl0VR7.jpg",
       "https://imgur.com/K0M95uc.jpg",
       "https://imgur.com/AteExZt.jpg",
       "https://imgur.com/zkFwjJ6.jpg",
       "https://imgur.com/iO3OQtz.jpg",
       "https://imgur.com/cjG6xAr.jpg",
       "https://imgur.com/tyLvkiQ.jpg",
       "https://imgur.com/iJZVhfl.jpg",
       "https://imgur.com/f941mz0.jpg",
       "https://imgur.com/qUMYFAr.jpg",
       "https://imgur.com/notzCl5.jpg",
       "https://imgur.com/PYtFSqA.jpg",
       "https://imgur.com/CPqXn7p.jpg",
       "https://imgur.com/z7O1OgD.jpg",
       "https://imgur.com/V2BF12c.jpg",
       "https://imgur.com/82H4G7p.jpg",
       "https://imgur.com/F4fRJCD.jpg",
       "https://imgur.com/NqGMLDb.jpg",
       "https://imgur.com/A9Lv4Hw.jpg", 
       "https://imgur.com/kZvny8g.jpg",
       "https://imgur.com/HmGzbkO.jpg",
       "https://imgur.com/GBGME3t.jpg",
       "https://imgur.com/Kvk5tVH.jpg", 
       "https://imgur.com/cXcXPy7.jpg",
       "https://imgur.com/EmvzHDH.jpg",
       "https://imgur.com/Q77MvHT.jpg",
       "https://imgur.com/Tj0eWCn.jpg",
       "https://imgur.com/zQX5zkE.jpg",   
    
     "https://i.imgur.com/B5ZyErb.jpg",

     "https://i.imgur.com/CrwrKlk.jpg",

     "https://i.imgur.com/tV61WsV.jpg",

     "https://i.imgur.com/66O6j1T.jpg",

     "https://i.imgur.com/R8KKRoN.jpg",

     "https://i.imgur.com/3EkVNe8.jpg",

      "https://i.imgur.com/k0jwRfs.jpg",

     "https://i.imgur.com/we4jvDp.jpg",

     "https://i.imgur.com/mISVkFC.jpg",

     "https://i.imgur.com/fQ5EHVZ.jpg",

     "https://i.imgur.com/GjbA4Ze.jpg",

     "https://i.imgur.com/dIzxU8Q.jpg",

      "https://i.imgur.com/a9o8A1a.jpg",

     "https://i.imgur.com/VwL7Nul.jpg",

     "https://i.imgur.com/tJF0xSU.jpg",

     "https://i.imgur.com/JiRhi00.jpg",

     "https://i.imgur.com/sWqCkwd.jpg",

     "https://i.imgur.com/r2usTzU.jpg",

      "https://i.imgur.com/OxhZsje.jpg",

     "https://i.imgur.com/vIBxhrD.jpg",

     "https://i.imgur.com/BJ0so5w.jpg",

     "https://i.imgur.com/vFANQJv.jpg",

     "https://i.imgur.com/9oU7z8g.jpg",

     "https://i.imgur.com/udTH3a1.jpg",

      "https://i.imgur.com/GV3WdKM.jpg",

     "https://i.imgur.com/1oYHF8W.jpg",

     "https://i.imgur.com/IjvL7BI.jpg",

     "https://i.imgur.com/gVhh9N2.jpg",

     "https://i.imgur.com/RH2zjOe.jpg",

     "https://i.imgur.com/hztZuAX.jpg",

      "https://i.imgur.com/GeVMt9o.jpg",

     "https://i.imgur.com/Q5hNjZX.jpg",

     "https://i.imgur.com/jFCU35N.jpg",

     "https://i.imgur.com/qpeaxY5.jpg",

     "https://i.imgur.com/R1g44xU.jpg",

     "https://i.imgur.com/xfxHrXL.jpg",

      "https://i.imgur.com/ph2qlIf.jpg",

     "https://i.imgur.com/eSf63Uf.jpg",

     "https://i.imgur.com/bTTq9LJ.jpg",

     "https://i.imgur.com/X0RK5T8.jpg",

     "https://i.imgur.com/LDHHAhu.jpg",

     "https://i.imgur.com/W71RsYu.jpg",

      "https://i.imgur.com/TGmFRW6.jpg",

     "https://i.imgur.com/ZyxAOIu.jpg",

     "https://i.imgur.com/Ej2b8aT.jpg",

     "https://i.imgur.com/2Vbu7Gp.jpg",

     "https://i.imgur.com/8XN7mb5.jpg",

     "https://i.imgur.com/wPb4HPU.jpg",

      "https://i.imgur.com/z6dlAn3.jpg",

     "https://i.imgur.com/hITbCDe.jpg",

     "https://i.imgur.com/EGrcRYS.jpg",

     "https://i.imgur.com/poCvruJ.jpg",

     "https://i.imgur.com/ntOZOPe.jpg",

     "https://i.imgur.com/NBqRXsf.jpg",

      "https://i.imgur.com/codSlYk.jpg",

     "https://i.imgur.com/dTsmNI6.jpg",

     ];

   var callback = () => api.sendMessage({body:`Ảnh Gái 18+ \nSố Ảnh: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/99.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/99.jpg"));
  return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/99.jpg")).on("close",() => callback());

   };