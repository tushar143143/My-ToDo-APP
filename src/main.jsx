// Import React library
import React from 'react'

// Import ReactDOM library with specific method
import ReactDOM from 'react-dom/client'

// Import the main App component
import App from './App.jsx'

// Import CSS styles
import './index.css'

// Import Provider component from react-redux for Redux store integration
import { Provider } from 'react-redux'

// Import the Redux store
import { store } from './app/store'

// Use ReactDOM to render the App component within the root element
// Use createRoot method to enable concurrent mode rendering
// Provider wraps the App component to provide Redux store access to all components
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
