const { translate } = require("bing-translate-api");

async function translateToEN(text) {
  try {
    const result = await translate(text, "pt", "en");
    return result.translation;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

module.exports = {
  translateToEN,
};
