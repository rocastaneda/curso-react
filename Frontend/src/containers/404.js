import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

class NotFound extends Component {

	goBack() {
		window.location.href = `/${process.env.APP}/login`
	}

	constructor(props) {
		super(props)
		this.goBack = this.goBack.bind(this)
	}

	render() {
		return(
			<div className="not-found-page">
				<div className="centered-middle">
					<i className="fa fa-window-close-o fa-5x" />
					<h3>Esta página no está disponible</h3>
					<h3>Es posible que el enlace que seleccionaste esté dañado o que se haya eliminado la página.</h3>
					<br />
					<Button bsStyle="primary" onClick={this.goBack}>Aceptar</Button>
				</div>
			</div>
		)
	}
}

export default NotFound
