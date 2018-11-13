import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './App'
import * as serviceWorker from './serviceWorker'
import i18n from "i18next"
import { withI18n, reactI18nextModule } from "react-i18next"
import TransEn from "./app.locale.en"
import { reducer } from "./Components"

const store = createStore(
	reducer,
	applyMiddleware(thunk)
)

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: TransEn
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  })

  const AppWithI18n = withI18n()(App); // pass `t` function to App
  
  ReactDOM.render(
	<Provider store={store}>
		<AppWithI18n />
	</Provider>,
	document.getElementById("root")
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
