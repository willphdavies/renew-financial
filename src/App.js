import React, { Component } from 'react'
import { 
	Loan,
	AppHeader, 
	AppFooter 
} from "./Components"
import './App.scss'
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {
  render() {
    return (
		<React.Fragment>
			<CssBaseline />
			<div className="App">
				<AppHeader></AppHeader>
				<main>
					<Loan></Loan>
				</main>
				<AppFooter></AppFooter>
			</div>
		</React.Fragment>
    );
  }
}

export default App;
