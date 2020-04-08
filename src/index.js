import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import ErrorBoundary from './components/ErrorBoundary'
import store from './redux/store'
import BookstoreService from './services/BookstoreService'
import { BookstoreServiceProvider } from './bookstoreServiceContext'
import './index.css'
import App from './App'


const bookstoreService = new BookstoreService()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router basename={ process.env.PUBLIC_URL }>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
)
