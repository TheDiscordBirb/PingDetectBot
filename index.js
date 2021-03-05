const Discord = require("discord.js");
const token = "TOKEN" //Replace the TOKEN with your bot's token
const logchannel = "CHANNEL" //Replace CHANNEL with the channel you want the bot to log the pings in
const client = new Discord.Client()

client.once("ready", () => {
    console.log("Bot has been activated!")
});

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.mentions.members.first())
    {
        const mentions = message.mentions.members.array() || new Array();
        var mentionnum = 0;
        for(e in mentions)
        {
            const pingmsg = `***<@${message.author.id}>*** pinged ***<@${mentions[mentionnum].id}>*** in ***${message.channel}*** on ***${message.createdAt.getFullYear()}/${message.createdAt.getMonth()}/${message.createdAt.getDay()}*** (yyyy/mm/dd) at ***${message.createdAt.getHours()}:${message.createdAt.getMinutes()}:${message.createdAt.getSeconds()}*** (hh/mm/ss)`
            let channel = message.guild.channels.cache.find(ch => ch.name === logchannel)
            channel.send(pingmsg);
            mentionnum += 1;
        }
    }
});

client.login(token);