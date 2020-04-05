import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import ErrorBoundary from './components/ErrorBoundary'
import store from './redux/store'
import './index.css'
import App from './App'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <App />
        </Router>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)