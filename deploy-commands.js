import "dotenv/config";
import { REST, Routes } from "discord.js";
import { SlashCommandBuilder } from "discord.js";

// const commands = [
//   {
//     name: "summary",
//     description: "sumarize text",
//     options:[{
//         name: "text",
//         description: "Text to summarize",
//         type: 3,
//         requireds: true
//     }]
//   },
// ];

const command = new SlashCommandBuilder().setName(`summary`).setDescription(`sumarize user text`).addStringOption((option)=>option.setName(`text`).setDescription(`user text to be summarized`).setRequired(true))
const userId = new SlashCommandBuilder().setName(`checkuserid`).setDescription(`shows your id`).addUserOption((option)=>option.setName(`user`).setDescription(`target user`).setRequired(true));
const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_API_TOKEN);
const commands = [
    command.toJSON(),
    userId.toJSON()
];

const CLIENT_ID = process.env.CLIENT_ID;   // Application ID
const GUILD_ID = process.env.GUILD_ID;     // ID сервера

(async () => {
  try {
    console.log("Started refreshing application (/) commands...");

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands }
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();