import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
//Main entry point of the React Application
//we import StrictMode from react to help identify potential problems
//in the application
//createRoot is used to create a root for rendering the React component tree
//we import global styles from index.css and the main App component from App.jsx
//Finally, we render the App component inside a StrictMode wrapper to the DOM element with id 'root'
