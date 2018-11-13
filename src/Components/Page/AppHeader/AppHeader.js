import React from "react"
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/core/Menu'
import "./AppHeader.scss"

export class AppHeader extends React.Component {
	render() {
		return (
		<AppBar color="primary" position="fixed">
			<ToolBar>
				<img src="/img/logo.svg" alt="logo" />
				<IconButton color="secondary" aria-label="Menu">
            		<MenuIcon open={false} />
          		</IconButton>
			</ToolBar>
			
		</AppBar>
		)
	}
}