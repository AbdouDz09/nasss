const Discord = require('discord.js');
const client = new Discord.Client();

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
انشاء الله تتفاعل
لو دخل سيرفر راح تنور سيرفر
https://discord.gg/Un29Wvs`) 
}).catch(console.error)
})


client.on("guildMemberMove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`تلعت من سيرفر مو مشكلة  
انشاء الله تتفاعل في سيرفر تحت
لو دخل سيرفر راح تنور سيرفر
https://discord.gg/Un29Wvs`) 
}).catch(console.error)
}) 

client.login('TOKEN');
