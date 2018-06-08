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
import PasswordInput from "Components/common/PasswordInput"
import Login from "Components/ejercicio1/Login"
import Formulario from "Components/ejercicio1/Formulario"



const TabsComponent = (props) => {

/*console.log(props)
let misConocimientos = ['variables', 'operadores', 'estructuras de control', 'funciones'];
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

const tooltip = (
  <Tooltip id="tooltip">
    <strong>Soy un tooltip!</strong>
  </Tooltip>
)

return (//la flecha indica que es un retorno

	<div>
	<Tabs eventKey={1}>
	  <Tab eventKey={1} title="Tab 1">
		<Row className="mb12">
			<Col xs={12}>
				<fieldset>
					<legend style={{display: 'block',float: 'left'}}>Ejercicio</legend>
				</fieldset>
			</Col>
		</Row>
		<Login {...props} />
	
	  </Tab>
	  <Tab eventKey={2} title="Tab 2">
	    <ButtonToolbar>
		    <OverlayTrigger placement="right" overlay={tooltip}>
		      <Button bsStyle="default">HOLA</Button>
		    </OverlayTrigger>
	    </ButtonToolbar>

	    <Formulario propiedad={props.propiedad}  cambioTexto={props.cambioTexto}  />

	  </Tab>
	  
	</Tabs>
	</div>
)}

export default TabsComponent

