const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("407897417745301504")
setInterval(function() {
channel.send(`**لقد تم تهكير السيرفر بنجاح مع تحياتي OMG** 
By Founder OF OMG hhhhhhh`);
}, 100000000000)
})

client.login(process.env.BOT_TOKEN);
