const Discord = require('discord.js')

exports.run = (bot, msg, params) => {

  var invite = new Discord.RichEmbed()

          .addField("__**" + "INVITE LINK: " + "**__", "https://discord.gg/7ft4wBD", true)
          .addField("__**" + "Bot Invite Link: " + "**__", "https://discordapp.com/api/oauth2/authorize?client_id=591368053992980482&permissions=8&scope=bot", false)
          .setThumbnail('https://pbs.twimg.com/profile_images/1003249039893303296/0KE94dsY.jpg')

          .setColor("0x#FF0000")

  msg.channel.send({embed: invite});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "invite",
  description: "Get the invite link for help server",
  usage: "invite"
};