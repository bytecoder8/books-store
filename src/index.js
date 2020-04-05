import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import './index.css'
import App from './App'


ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Router>
        <App />
      </Router>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)
