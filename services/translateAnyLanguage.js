const { translate } = require("bing-translate-api");

async function translateAnyLanguage(to, text) {
  try {
    const result = await translate(text, null, to);

    return {
      translation: result.translation,
      from: result.language.from,
      to: result.language.to,
    };
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

module.exports = {
  translateAnyLanguage,
};
