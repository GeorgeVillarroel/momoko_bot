const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('teamo')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Kumuku tambien te ama :heart:');
	},
};