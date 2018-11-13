import React from "react"
import BottomNavigation from '@material-ui/core/BottomNavigation';
import "./AppFooter.scss"

export class AppFooter extends React.Component {
	render() {
		return (
		<BottomNavigation className="app-footer">
			All rights reserved, 2018
		</BottomNavigation>
		)
	}
}