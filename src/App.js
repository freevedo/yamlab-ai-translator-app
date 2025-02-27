import React, { useState } from 'react';
import './App.css';
import TranslationForm from './components/TranslationForm';
import TranslationResult from './components/TranslationResult';
import translationService from './services/translationService';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [translation, setTranslation] = useState('');
  const [error, setError] = useState('');

  const handleTranslate = async (data) => {
    setIsLoading(true);
    setError('');
    
    try {
      // Use the translation service
      const result = await translationService.translate(
        data.text,
        data.sourceLanguage,
        data.targetLanguage
      );
      
      setTranslation(result);
      setIsLoading(false);
    } catch (err) {
      setError('Error during translation. Please try again.');
      setIsLoading(false);
      console.error('Translation error:', err);
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Yamlab AI Translator App</h1>
        <p>
          This application allows you to translate text between supported languages using our translation API, 
          which is running on a Raspberry Pi 5 in our lab. Supported languages include English, German, French, Moore, Ewe, Hausa, Fulfulde and Bambara. The LLM model that is running is: "facebook/nllb-200-distilled-600M". The goal of 
          this project is to not let our languages behing.
        </p>
      </header>
      <main>
        <TranslationForm onTranslate={handleTranslate} />
        <TranslationResult 
          translation={translation} 
          isLoading={isLoading} 
          error={error} 
        />
      </main>
      <footer>
        <p>Translation App</p>
      </footer>
    </div>
  );
}

export default App;
