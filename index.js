// Carregar variáveis de ambiente
require('dotenv').config();

// Importar discord.js
const { Client, GatewayIntentBits } = require('discord.js');

// Criar uma nova instância do bot
const client = new Client({
intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
],
});

// Quando o bot estiver pronto
client.once('ready', () => {
console.log(`Bot logado como ${client.user.tag}`);
});

// Configurar comando de exemplo
client.on('messageCreate', (message) => {
if (message.content === '!ping') {
    message.reply('Pong!');
}
});

// Login com o token do bot
client.login(process.env.DISCORD_TOKEN);
