import { Client, GatewayIntentBits } from 'discord.js';
import { getEnvVar } from './env.js';


const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
});

function initalizeClient() {
  const TOKEN = getEnvVar("BOT_TOKEN")

  client.on('ready', () => {
    console.log(`Logged in as ${client?.user?.tag}!`);
  });
  
  client.on("messageCreate", (message) => {
      if(message.author.bot) return
      message.reply('Yo from bot');
  })

  client.on("interactionCreate", interaction => {
    if(interaction.isRepliable()) {
        interaction.reply("PONG")
    }
  })
  
  client.login(TOKEN).catch(err => {
      console.error("Login Error", err);
      process.exit(1);
  });
}

export default initalizeClient