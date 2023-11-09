const { SlashCommandBuilder } = require("discord.js");
const { translateAnyLanguage } = require("../../services/translateAnyLanguage");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("translate")
    .setDescription("Escreva algo para ser traduzido em qualquer idioma.")
    .addStringOption((option) =>
      option
        .setName("destino")
        .setDescription("Código do idioma do resultado. Ex: en, pt, es")
    )
    .addStringOption((option) =>
      option.setName("texto").setDescription("O texto que será traduzido.")
    ),
  async execute(interaction) {
    await interaction.deferReply();

    try {
      const text = interaction.options.getString("texto") ?? null;
      const targetLanguage = interaction.options.getString("destino") || "pt";

      if (text === null) {
        await interaction.editReply(
          "ERRO: Ocorreu algum erro ao tentar traduzir"
        );
      }

      const { translation, from, to } = await translateAnyLanguage(
        targetLanguage,
        text
      );

      await interaction.editReply(
        `>>> ${from}: \` ${text} \` \n${to}: \` ${translation} \``
      );
    } catch (error) {
      console.log(error);
      await interaction.editReply(
        "ERRO: Ocorreu algum erro ao tentar traduzir"
      );
    }
  },
};
