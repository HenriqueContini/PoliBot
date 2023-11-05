const { SlashCommandBuilder } = require("discord.js");
const { translateToEN } = require("../../services/translateToEN");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("translate-to-en")
    .setDescription(
      "Escreva algo em português para ser traduzido para o inglês"
    )
    .addStringOption((option) =>
      option.setName("texto").setDescription("O texto que será traduzido.")
    ),
  async execute(interaction) {
    await interaction.deferReply();

    try {
      const text = interaction.options.getString("texto") ?? null;

      if (text === null) {
        await interaction.editReply(
          "ERRO: Ocorreu algum erro ao tentar traduzir"
        );
      }

      const translation = await translateToEN(text);

      await interaction.editReply("`" + translation + "`");
    } catch (error) {
      await interaction.editReply(
        "ERRO: Ocorreu algum erro ao tentar traduzir"
      );
    }
  },
};
