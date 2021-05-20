import {Col, Grid, Row} from 'react-bootstrap';
import React,{Component}  from 'react';

import {connect} from 'react-redux';

class NavMainRenovacion extends Component {

	mapItems(item,index) {
		let activeClass = item.active?'activew':'activeq';
		let element;

		if (item.href) {
			element = <a href="#" onClick={(e)=>{e.preventDefault();this.context.router.push(item.href)}}><span>{item.name}</span></a>
		} else {
			element = <a><span>{item.name}</span></a>
		}

		return (
			<li key={index} className={activeClass}>{element}</li>)
	}

	constructor(props, context) {
		super(props, context);
		this.mapItems = this.mapItems.bind(this)
	}

	render() {
		let items = this.props.navItems.map(this.mapItems);

		return (
			<Row className="navMains">
				<Grid>
					<Row>
						<Col sm={12}>
							<ul role="tablist" className="nav nav-tabs"> {items}</ul>
						</Col>
					</Row>
				</Grid>
			</Row>)
	}
}

const mapStateToProps = (state) => {
	return {
		navItems: state.NavItems.get("navItems")
	}
}

export default connect(mapStateToProps)(NavMainRenovacion)
