import { REST, Routes } from 'discord.js';
import { getEnvVar } from './env.js';
import { COMMAND } from '../types.js';

const TOKEN = getEnvVar("BOT_TOKEN");
const CLIENT_ID = getEnvVar("CLIENT_ID");

const commands: COMMAND[] = [
  {
    name: "ping",
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

async function initilaizeCommands() {
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error("Could not register commands", error);
      }
}

export default initilaizeCommands