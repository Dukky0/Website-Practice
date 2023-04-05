const {Client, GatewayIntentBits} = require("discord.js");
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    ]
});
client.once("ready", () => {
    console.log("BOT IS ONLINE"); //message when bot is online
})
client.login("");