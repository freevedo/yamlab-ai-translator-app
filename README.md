# Translation App

A simple React application for text translation between multiple languages.

## Features

- Translate text between 10 different languages
- Clean, responsive UI
- Ready for API integration

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

## API Integration

This application is designed to work with a translation API. 

To integrate your API:
1. Enter your API URL in the input field at the top of the application.
2. The translation service in `src/services/translationService.js` will need to be updated to match your API's specifications.

## Project Structure

- `src/components/` - React components
  - `TranslationForm.js` - Input form with language selection
  - `TranslationResult.js` - Display for translation results
- `src/services/` - Service modules
  - `translationService.js` - Handles API communication

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Technologies Used

- React
- CSS
- JavaScript (ES6+)

## Future Improvements

- Add language auto-detection
- Implement history of recent translations
- Add speech-to-text and text-to-speech functionality

---

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*
