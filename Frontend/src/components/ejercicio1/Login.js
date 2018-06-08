/*import Labels from 'Assets/Labels'
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import TextInput from "Components/common/TextInput"*/
import DatePicker from 'react-bootstrap-date-picker'
import Labels from 'Assets/Labels'
import React from 'react'
import {Button, Row, Col, Tabs, Tab, Tooltip, OverlayTrigger, ButtonToolbar} from 'react-bootstrap'
import TextInput from "Components/common/TextInput"
import DatePickerInput from "Components/common/DatePickerInput"
import TextareaInput from "Components/common/TextareaInput"
import SelectInput from "Components/common/SelectInput"
import PasswordInput from "Components/common/PasswordInput"

const Login = (props) => {
/*let misConocimientos = ['variables', 'operadores', 'estructuras de control', 'funciones'];
let aprendido = ['rest operator', 'spread operator'];
let misConocimientosAmpliados = [...misConocimientos, ...aprendido, 'otra cosa más'];


let state = {
			form: {
				combo:"2",
				txt:"B",
				fecha:"26/04/2018",
				txtarea:"D"
			},
		    validate: true
		}
let c = {
				form: {
					combo:'1',
					txt:''
				}
			}

let a = {form: {...state.form, ...c.form}}
console.log(a);*/

return (//la flecha indica que es un retorno
				<form name="ejercicio1" id="ejercicio1" >
					<Row>
						
						<Col sm={12} md={4}>
							<TextInput
								placeholder={'Usuario'}
								name={'txt'}	
								onChange={props.cambioTexto}
								required
								error={props.validate}
								/>
						</Col>
						<Col sm={12} md={4}>
						<TextInput
							id={'lastName'}
							name={"lastName"}
							className={"form-control"}
							placeholder={"Apellidos"}
						/>

						</Col>
						<Col sm={12} md={4}>
							<DatePicker id="example-datepicker" value={props.propiedad.form.datePck} name={'datePck'} onChange={props.onChange} />
						</Col>
						<Col sm={12} md={4}>
							<Button bsStyle="default" onClick={props.cambioTexto} >Agregar</Button>
						</Col>
					</Row>
				</form>
			
)}

export default Login

