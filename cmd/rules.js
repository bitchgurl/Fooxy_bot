const Discord = require('discord.js');

var rules1 = new Discord.RichEmbed()
        .addField("Rules (1/2):", "---------------------------------------------------------------------------------------\n" +
                                  "__**1.**__ Do not spam or flood the chats with messages, symbols or pictures etc. \n" +
                                  "__**2.**__ Do not type in all Caps, Bold, Italic or other formats unless you're an Admin. \n" +
                                  "__**3.**__ Adult (18+), explicit images etc, go to the NSFW channel \n" +
                                  "__**4.**__ No racist or degrading content.\n" +
                                  "__**5.**__ No excessive cursing. \n" +
                                  "__**6.**__ Do not advertise other sites/discord servers without permission. \n" +
                                  "__**7.**__ Do not post external links other than direct links to youtube\n", true)

        .setColor("0xFF0000")
        

var rules2 = new Discord.RichEmbed()
        .addField("Rules (2/2):", "__**8.**__ Do not use peoples usernames and/or posing as them. \n" +
                                  "__**9.**__ Do not beg or repeatedly asking for permissions in the chat. \n" +
                                  "__**10.**__. No offensive names or names which contain swear words. \n" +
                                  "__**11.**__ Do not argue with staff there decisions are final. \n" +
                                  "__**12.**__ Do not repeatedly message Moderators or Admins without permission \n" +
                                  "__**13.**__ Do not message people, Moderators or Admins with \"Stupid\" questions \n" +
                                  "---------------------------------------------------------------------------------------\n", true)

        .setColor("0xFF0000")








exports.run = (bot, msg, params) => {

  msg.channel.send(rules1)
  msg.channel.send(rules2)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rule'],
  permLevel: 0
};

exports.help = {
  name: "rules",
  description: "Get all the rules of a server",
  usage: "rules"
};