import React from 'react'
import { Link } from 'react-router-dom'

import { Media } from 'react-bootstrap'

export const MediaCard = (props) => (
	<Media className="dashboard-media">
		<Link onClick={props.onClick} to={props.to}>
			<Media.Left>
				<div className="back-fa">
					<i className={props.icon} />
				</div>
			</Media.Left>
			<Media.Body>
				<Media.Heading>{props.title}</Media.Heading>
				{!props.estatus && <p>{props.counter}</p>}
				{props.estatus && 
					<p className="estatus pull-right">
						Estatus: <span className={`${props.estatus === "Pendiente" ? 'pending-status' : props.estatus === "En Proceso" ? 'process-status' : 'finalized-status'}`}>{props.estatus}</span>
					</p>
				}
			</Media.Body>
		</Link>
	</Media>
)

export default MediaCard