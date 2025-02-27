// This service will handle API calls to the translation endpoint
// The API URL will be provided later and updated here


const API_URL = 'https://ai-api.yamlabburkina.com/translate';
const translationService = {
  // This is a placeholder function that will be updated once the API URL is provided
  translate: async (text, src_lang, target_lang) => {
    // call api with fetch
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '688d61012422c4a9ccd8a0a737d2f5ed',
      },
      body: JSON.stringify({
        text,
        src_lang,
        target_lang
      })
    });
    const data = await response.json();
    console.log(data);
    return data.translated_text;
  }
};  


export default translationService;