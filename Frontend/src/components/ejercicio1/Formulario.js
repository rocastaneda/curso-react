/*import Labels from 'Assets/Labels'
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import TextInput from "Components/common/TextInput"*/
import Labels from 'Assets/Labels'
import React from 'react'
import {Button, Row, Col, Tabs, Tab, Tooltip, OverlayTrigger, ButtonToolbar} from 'react-bootstrap'
import TextInput from "Components/common/TextInput"
import DatePickerInput from "Components/common/DatePickerInput"
import TextareaInput from "Components/common/TextareaInput"
import SelectInput from "Components/common/SelectInput"

const Formulario = (props) => {


return (//la flecha indica que es un retorno
				<form name="ejercicio1" id="ejercicio1" >
					<Row>
						<Col sm={12} md={4}>
							<SelectInput
								label={'Combo'}
								name={'combo'}
								value={props.propiedad.form.combo}
							    options={[{'id': '1', 'valor': 'Hola'}, {'id': '2', 'valor': 'Hello'}]}
							    />
						</Col>
						<Col sm={12} md={4}>
							<TextInput
								label={'TEXTO'}
								value={props.propiedad.form.txt}
								placeholder={'ingresa un texto'}
								name={'txt'}
								onChange={props.cambioTexto}
								required
								error={props.validate}
								/>
						</Col>
						<Col sm={12} md={4}>
							<DatePickerInput
								label={'FECHA'}
								placeholder={'fecha'}
								name={'fecha'}
								value={''}
								/>
						</Col>
						<Col sm={12} md={12}>
							<TextareaInput
								label={'Text area'}
								placeholder={'Párrafo para escribir mucho'}
								row={10}
								name={'txtarea'}
								value={props.propiedad.form.txtarea}							
								maxLength={180}
								/>
						</Col>
					</Row>
				</form>
	
)}

export default Formulario

