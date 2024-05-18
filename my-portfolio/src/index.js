import React from 'react'; // Importing React library
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for rendering
import './index.css'; // Importing global CSS styles
import App from './App';  // Importing the main App component
import reportWebVitals from './reportWebVitals'; // Importing reportWebVitals for performance metrics

import "@fontsource/roboto" // Importing Roboto font
import "@fontsource/outfit" // Importing Outfit font

// Creating a root element for rendering the React application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Rendering the App component inside React.StrictMode for highlighting potential problems */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
