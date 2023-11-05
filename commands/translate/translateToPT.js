const { SlashCommandBuilder } = require("discord.js");
const { translateToPT } = require("../../services/translateToPT");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("translate-to-pt")
    .setDescription(
      "Escreva algo em inglês para ser traduzido para o português"
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

      const translation = await translateToPT(text);

      await interaction.editReply("`" + translation + "`");
    } catch (error) {
      await interaction.editReply(
        "ERRO: Ocorreu algum erro ao tentar traduzir"
      );
    }
  },
};
