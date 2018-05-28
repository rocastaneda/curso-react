import Labels from 'Assets/Labels'
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import TextInput from "Components/common/TextInput"
import SelectInput from "Components/common/SelectInput"
import DatePickerInput from "Components/common/DatePickerInput"
import TextareaInput from "Components/common/TextareaInput"

const Example = (props) => (
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
							<SelectInput
								label={Labels.CallClient.numberClient}
								placeholder={Labels.CallClient.numberClient}
								name={'numberClient'}
								options={[{id:1, valor: 'uno'},{id:2, valor: 'dos'},{id:3, valor: 'tres'}]}
								required
								error={props.validate || false} />
						</Col>
						<Col sm={12} md={4}>
							<TextInput
								label={Labels.CallClient.nameOne}
								placeholder={Labels.CallClient.nameOne}
								name={'nameOne'}
								required
								disabled
								num
								maxLength={100}
								error={props.validate || false} />
						</Col>
						<Col sm={12} md={4}>
							<DatePickerInput
								label={Labels.CallClient.nameTwo}
								placeholder={Labels.CallClient.nameTwo}
								name={'nameTwo'}
								required
								error={props.validate || false} />
						</Col>
						<Col sm={12} md={12}>
							<TextareaInput
								label={Labels.CallClient.lastNameOne}
								placeholder={Labels.CallClient.lastNameOne}
								name={'lastNameOne'}
								required
								row={20}
								maxLength={100}
								error={props.validate || false} />
						</Col>
					</Row>
				</form>
			</Col>
		</Row>
	</div>
)

export default Example
