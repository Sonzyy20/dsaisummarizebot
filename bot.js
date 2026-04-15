import "dotenv/config"
import summarizeText from "./openai.js";


const { env } = process;
import { Client, GatewayIntentBits, Events } from "discord.js"

const client = new Client ({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates]});
client.on(Events.ClientReady, readyClient => {
  console.log(`Logged in as ${readyClient.user.tag}!`);
});

client.once("clientReady",()=>{
    console.log("Ready!");
});
client.login(env.DISCORD_API_TOKEN)

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "summary") {
    const text = interaction.options.getString("text");

    await interaction.deferReply();

    const summary = await summarizeText(text);

    await interaction.editReply(summary);
  }
});

