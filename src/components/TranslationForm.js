import React, { useState } from 'react';

const TranslationForm = ({ onTranslate }) => {
  const [inputText, setInputText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('fra_Latn');
  const [targetLanguage, setTargetLanguage] = useState('mos_Latn');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      onTranslate({
        text: inputText,
        sourceLanguage,
        targetLanguage
      });
    }
  };

  const languages = [
    { code: 'eng_Latn', name: 'English' },
    { code: 'fra_Latn', name: 'French' },
    { code: 'deu_Latn', name: 'German' },
    { code: 'mos_Latn', name: 'Moore' },
    { code: 'bam_Latn', name: 'Bambara' },
    { code: 'ewe_Latn', name: 'Ewe' },
    { code: 'fuv_Latn', name: 'Fulfulde' },
    { code: 'hau_Latn', name: 'Hausa' },
  ];

  return (
    <div className="translation-form">
      <form onSubmit={handleSubmit}>
        <div className="language-selectors">
          <div className="language-select">
            <label htmlFor="sourceLanguage">From:</label>
            <select 
              id="sourceLanguage" 
              value={sourceLanguage} 
              onChange={(e) => setSourceLanguage(e.target.value)}
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code}>{lang.name}</option>
              ))}
            </select>
          </div>
          
          <div className="language-select">
            <label htmlFor="targetLanguage">To:</label>
            <select 
              id="targetLanguage" 
              value={targetLanguage} 
              onChange={(e) => setTargetLanguage(e.target.value)}
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code}>{lang.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="text-input-area">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter text to translate"
            rows={5}
          />
        </div>

        <button type="submit" className="translate-button">Translate</button>
      </form>
    </div>
  );
};

export default TranslationForm;