const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
//----------------------------------------------BOT CODING---------------------
//Importing all needed Commands
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
const colors = require("colors"); //this Package is used, to change the colors of our Console! (optional and doesnt effect performance)
const fs = require("fs"); //this package is for reading files and getting their inputs
// const config = require("./botconfig/config.json");
const mySecret = process.env['token']

//Creating the Discord.js Client for This Bot with some default settings ;) and with partials, so you can fetch OLD messages
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  disableMentions: "all",
  shards: "auto",
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  disableEveryone: true,
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

require("discord-buttons")(client);
//Client variables to use everywhere
client.commands = new Discord.Collection(); //an collection (like a digital map(database)) for all your commands
client.aliases = new Discord.Collection(); //an collection for all your command-aliases
// client.categories = fs.readdirSync("./commands/"); //categories
client.cooldowns = new Discord.Collection(); //an collection for cooldown commands of each user

["suggestions"].forEach(handler => {
  require(`./modules/${handler}`)(client);
});

client.on("clickButton", async (button) => {
  
  if(button.id === 'button1') {
    await button.clicker.fetch();
    await button.reply.defer();
    button.channel.send(`\`\`\`fix\nãðãï¼¶á»¯ï½ï½ãï½ï½ï½ãï½ï½Ã©ãï½ï½ï½áº¿ï½ãï½á»¯ï½ãï¼ã\n\`\`\``).then(msg => msg.delete({timeout: 3000}))
  }
  if(button.id === 'button2') {
    await button.clicker.fetch();
    await button.reply.defer();
    button.channel.send(`\`\`\`fix\nãð ï¼£ï½Ã¡ï½ãï½áº­ï½ãï½ï½ï½áº¿ï½ãï½á»¯ï½ãï¼ã\n\`\`\``).then(msg => msg.delete({timeout: 3000}))
  }

  if(button.id === 'btnSug1') {
    await button.clicker.fetch();
    await button.reply.defer();
    button.channel.send(`\`\`\`fix\nãâªâªâª | Äang tiáº¿n hÃ nh > Coming Soonã\n\`\`\``)
  }
  if(button.id === 'btnSug2') {
    await button.clicker.fetch();
    await button.reply.defer();
    button.channel.send(`\`\`\`fix\nãâ | ÄÃ£ há»§y Ã½ tÆ°á»ng.ã\n\`\`\``)
  }
})

//login into the bot
client.login(mySecret);
