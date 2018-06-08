import * as Utils from 'Assets/Utils'

import Labels from 'Assets/Labels'

import React, { Component } from 'react'
import {closeModal, createModal} from 'Modules/Modal'

//import PopUpDataClient from 'Components/callClient/PopUpDataClient'

import Carrusel from 'Components/carrusel/Carrusel'

import TabsComponent from 'Components/tabs/Tabs'

import { getDataClient, clearDataClient } from "Modules/DataClient"

import { getDataEjercicio, clearDataEjercicio } from "Modules/InfoEjercicio/infoEjercicio"


import { connect } from 'react-redux'//se conecta con mapStateToProps y mapDispatchToProps

class EjercicioData extends Component {

	onSubmit() {
		event.preventDefault()

	}

	constructor(props) {
		super(props)

		this.state = {
			form: {
				combo:"2",
				txt:"B",
				fecha:"26/04/2018",
				txtarea:"D"
			},
		    validate: true
		}


		this.onSubmit = this.onSubmit.bind(this)
		this.handleText = this.handleText.bind(this)
	}

	componentWillReceiveProps(nextProps){
		/*let misConocimientos = ['variables', 'operadores', 'estructuras de control', 'funciones']
		let aprendido = ['rest operator', 'spread operator']
		let misConocimientosAmpliados = [...misConocimientos, ...aprendido, 'otra cosa más']
		console.log(misConocimientosAmpliados)
		console.log(nextProps.dataEjercicio)*/
		//this.setState(nextProps.dataEjercicio)
		console.log("componentWillReceiveProps");
		this.setState({
			form: {...this.state.form, ...nextProps.dataEjercicio.form}}
		)
	}

	componentWillMount() {
		console.log("componentWillMount");
	}


	componentWillUnmount(){
		console.log("componentWillUnmount");
	}


	componentDidMount(){
		console.log("componentDidMount");
	}

	componentDidUpdate(){
		console.log("componentDidUpdate");
	}


	componentWillUpdate(){
		console.log("componentWillUpdate");
	}

	shouldComponentUpdate(){
		console.log("shouldComponentUpdate");
	}
	/*componentWillMount() {
		this.props.clearDataClient()
		this.props.getDataClient({campaniaId: 10}).then( response => {

			let data = response.Cliente
			let modalObj = {
				body: <PopUpDataClient
					data={data}
				/>,
				closeButton: true,
				className: 'custom-middle-modal',
				footer: [{
					txt: "Cancelar",
					type: "default",
					onClick: () => {this.props.closeModal()}
				},
				{
					txt: "Continuar",
					type: 'primary',
					onClick: ()=> {this.onSubmit()}
				}]
			}

			this.setState({form: {
				Folio: '',
				NombreCliente : data.nombre,
				ApellidoCliente : data.apellidoPaterno + " " + data.apellidoMaterno,
				TelefonoDeContacto : data.Contacto ? data.Contacto.ListaTelefonos.Telefono.codigoArea + data.Contacto.ListaTelefonos.Telefono.numeroTelefonico : '',
				FechaInicioProspeccion : new Date(),
				Etapa : '',
				Estatus : '',
				ClienteId : data.idCliente
			}}, () => this.props.createModal(modalObj) )
		})
	}*/

	handleText (event){
		event.preventDefault()
		this.setState(
			{form:{...this.state.form,[event.target.name]:event.target.value}},
			() => {}//this.props.getDataEjercicio(this.state.form)

		)

		this.props.getDataEjercicio(this.state.form).then(
				response => {
					console.log("RESPONSE",response)
				}
		)
	}

	render() {

		return(
			<div className="container">
				<h1>HOLA</h1>
				<Carrusel 
				/>
				
				<Formulario1 propiedad={this.state} validate={this.state.validate} cambioTexto={this.handleText}
				/>
			</div>
		)
	}

}


const mapStateToProps = (state) => {
	return {
		dataEjercicio: state.DataEjercicio.get('Get').toJS()
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

		clearDataEjercicio:() => dispatch(clearDataEjercicio()),
		getDataEjercicio:(form) => dispatch(getDataEjercicio())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(EjercicioData)


