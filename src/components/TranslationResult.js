import React from 'react';

const TranslationResult = ({ translation, isLoading, error }) => {
  return (
    <div className="translation-result">
      {isLoading && <div className="loading">Translating...</div>}
      
      {error && <div className="error">{error}</div>}
      
      {translation && !isLoading && !error && (
        <div className="result">
          <h3>Translation</h3>
          <div className="translated-text">{translation}</div>
        </div>
      )}
    </div>
  );
};

export default TranslationResult;