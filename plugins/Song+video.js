const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download songs",
    category: "download ",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a song Url Or Tittle 🚫")
const search = await yts(q) 
const data = search.videos[0];
const url = data.url 

let desc = `
🌸 *KING ASH MD SONG DOWNLOADER* 🌸

tittle: ${data.title}
discription: ${data.discription}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

CREATE BY OLD KING LOKU ASH 👨‍💻✅
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
    
//download audio 

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})




  
}catch(e){
console.log(e)
reply(`${e}`)
}
})


//==========video-dl==========

cmd({
    pattern: "video",
    desc: "download videos",
    category: "download ",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a song Url Or Tittle 🚫")
const search = await yts(q) 
const data = search.videos[0];
const url = data.url 

let desc = `
🌸 *KING ASH MD VIDEO DOWNLOADER* 🌸

tittle: ${data.title}
discription: ${data.discription}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

CREATE BY OLD KING LOKU ASH 👨‍💻✅
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
    
//download video 

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})

await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:deta.title + ".mp4"},{quoted:mek})


  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
