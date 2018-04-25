import Labels from 'Assets/Labels'
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import TextInput from "Components/common/TextInput"

const PopUpDataClient = (props) => (

	<div>
		<Row className="mb12">
			<Col xs={12}>
				<fieldset>
					<legend style={{display: 'block',float: 'left'}}>{Labels.CallClient.title}</legend>
				</fieldset>
			</Col>
		</Row>
		<Row className="mb12">
			<Col xs={12}>
				<form name="formCriterios" id="formCriterios" >
					<Row>
						<Col sm={12} md={4}>
							<TextInput
								label={Labels.CallClient.numberClient}
								placeholder={Labels.CallClient.numberClient}
								name={'numberClient'}
								value={props.data.idCliente}
								required
								disabled
								num
								maxLength={100}
								error={props.validate || false} />
						</Col>
						<Col sm={12} md={4}>
							<TextInput
								label={Labels.CallClient.nameOne}
								placeholder={Labels.CallClient.nameOne}
								name={'nameOne'}
								value={props.data.nombre}
								required
								disabled
								num
								maxLength={100}
								error={props.validate || false} />
						</Col>
						<Col sm={12} md={4}>
							<TextInput
								label={Labels.CallClient.nameTwo}
								placeholder={Labels.CallClient.nameTwo}
								name={'nameTwo'}
								value={''}
								required
								disabled
								num
								maxLength={100}
								error={props.validate || false} />
						</Col>
						<Col sm={12} md={4}>
							<TextInput
								label={Labels.CallClient.lastNameOne}
								placeholder={Labels.CallClient.lastNameOne}
								name={'lastNameOne'}
								value={props.data.apellidoPaterno}
								required
								disabled
								num
								maxLength={100}
								error={props.validate || false} />
						</Col>
						<Col sm={12} md={4}>
							<TextInput
								label={Labels.CallClient.lastNameTwo}
								placeholder={Labels.CallClient.lastNameTwo}
								name={'lastNameTwo'}
								value={props.data.apellidoMaterno}
								required
								disabled
								num
								maxLength={100}
								error={props.validate || false} />
						</Col>
						<Col sm={12} md={4}>
							<TextInput
								label={Labels.CallClient.phone}
								placeholder={Labels.CallClient.phone}
								name={'phone'}
								value={props.data.Contacto ? props.data.Contacto.ListaTelefonos.Telefono.codigoArea + props.data.Contacto.ListaTelefonos.Telefono.numeroTelefonico: ''}
								required
								disabled
								num
								maxLength={100}
								error={props.validate || false} />
						</Col>
					</Row>
				</form>
			</Col>
		</Row>
	</div>
)

export default PopUpDataClient

