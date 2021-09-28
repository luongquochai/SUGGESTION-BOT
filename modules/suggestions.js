const { MessageEmbed } = require("discord.js");
// const config = require("../botconfig/config.json");
const ee = require("../botconfig/embed.json");
const { MessageButton, MessageActionRow } = require("discord-buttons");
// const client.disbut = 
module.exports = client => {
    const btn = new MessageButton()
        .setStyle('green')
        .setLabel('🚀 - Lên luôn')
        .setID('button1')
    const btn2 = new MessageButton()
        .setStyle('red')
        .setLabel('💨 - Rén')
        .setID('button2')
    const button = new MessageActionRow()
        .addComponent(btn)
        .addComponent(btn2)
  
    // BUTTON FOR SUGGESTION //
    const btnSug1 = new MessageButton()
        .setStyle('green')
        .setLabel('✔ | Đồng ý')
        .setID('btnSug1')
    const btnSug2 = new MessageButton()
        .setStyle('red')
        .setLabel('✖ | Từ chối')
        .setID('btnSug2')
    const buttonSug = new MessageActionRow()
        .addComponent(btnSug1)
        .addComponent(btnSug2)
    //========================================/
  
    client.on("message", message => {
        if(message.author.bot) return;
        if (!message.content.trim().startsWith(',')) {
          if(message.channel.id === "891389730070102047") {
            let guild = client.guilds.cache.get('452139403666653194');
            let member = guild.member(message.author);
            let nickname = member ? member.displayName : null;
            let args = message.content;
            // console.log(nickname);
            const Attachment = message.attachments.first(); // Getting the attachment.
                
            const embed = new MessageEmbed()
                // .setAuthor(`Finance Advices from ${message.author.tag}`)
                // .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                .setColor('00ffee')
                .setAuthor(`Finance Advices from ${nickname}`, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(args)
                .setFooter(`️⚽️ - 𝑫𝒊𝒔𝒄𝒍𝒂𝒊𝒎𝒆𝒓 𝒏𝒐𝒕 𝒇𝒊𝒏𝒂𝒏𝒄𝒊𝒂𝒍 𝒂𝒅𝒗𝒊𝒄𝒆 !`)
            if (Attachment && Attachment.url) {embed.setImage(Attachment.url)}
            
            // message.delete()
            message.guild.channels.cache.get('891389730070102047').send({
                embed: embed,
                component: button
            }).then(message.delete())
            .catch((err)=>{
                throw err;
            });
          }
        }
        //---------SUGGESTION CHANNEL----------------//
        if(message.member.hasPermission("ADMINSTRATOR")) {
            if (!message.content.trim().startsWith(',')) {
                if(message.channel.id === "890162279146987580") {
                    let guild = client.guilds.cache.get('452139403666653194');
                    let member = guild.member(message.author);
                    // let nickname = member ? member.displayName : null;
                    let args = message.content;
                    // console.log(nickname);
                    const Attachment = message.attachments.first(); // Getting the attachment.
                    const embedSug = new MessageEmbed()
                        .setColor('00ffee')
                        .setAuthor(` Ý tưởng, kế hoạch kế tiếp trong tương lai 💡`, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(args)
                        .setFooter(ee.footertext,ee.footericon)
                    if (Attachment && Attachment.url) {embed.setImage(Attachment.url)}
                    message.guild.channels.cache.get('890162279146987580').send({
                        embed: embedSug,
                        component: buttonSug
                    }).then(message.delete())
                    .catch((err)=>{
                        throw err;
                    });
                }
            }
        }
        
    })
}