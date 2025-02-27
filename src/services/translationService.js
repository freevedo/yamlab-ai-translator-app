// This service will handle API calls to the translation endpoint
// The API URL will be provided later and updated here

const API_KEY = process.env.REACT_APP_API_KEY;

const API_URL = 'https://ai-api.yamlabburkina.com/translate';
const translationService = {
  // This is a placeholder function that will be updated once the API URL is provided
  translate: async (text, src_lang, target_lang) => {
    // call api with fetch
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
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