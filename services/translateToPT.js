const { translate } = require("bing-translate-api");

async function translateToPT(text) {
  try {
    const result = await translate(text, "en", "pt");
    return result.translation;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

module.exports = {
  translateToPT,
};
