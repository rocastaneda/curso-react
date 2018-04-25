import { MenuItem, Nav, NavDropdown, NavItem, Navbar } from 'react-bootstrap'

import React from 'react'
import { connect } from 'react-redux'
import logo from 'Assets/images/nmp.svg'

class App extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			open: false
		}
	}

	render (){

		const {firstname, lastname} = sessionStorage,
		userName = firstname +' '+ lastname

		return (
			<div>
				<Navbar>
					<Navbar.Collapse>
						<Nav>
						 	<img src={logo} className="logo" style={{margin:'11px 0 15px -10px'}} />
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<div onClick={this.handleClick}>
					{this.props.children}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
