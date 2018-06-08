import * as Utils from 'Assets/Utils'

import Labels from 'Assets/Labels'

import React, { Component } from 'react'
import {closeModal, createModal} from 'Modules/Modal'

//import PopUpDataClient from 'Components/callClient/PopUpDataClient'

import Carrusel from 'Components/carrusel/Carrusel'

import List from 'Components/ejercicio1/List'

//import TabsComponent from 'Components/tabs/Tabs'
import TabsComponent from 'Components/ejercicio1/TabsComponent'

import { getDataClient, clearDataClient } from "Modules/DataClient"

import { getDataEj, clearDataEjercicio, login } from "Modules/InfoEjercicio/infoEjercicio"


import { connect } from 'react-redux'//se conecta con mapStateToProps y mapDispatchToProps

class EjercicioData extends Component {



	constructor(props) {
		super(props)

		this.state = {
			form: {
				combo:"2",
				txt:"B",
				fecha:"26/04/2018",
				txtarea:"D",
				datePck: new Date().toISOString()
			},
		    validate: true,
		    term: 'AZERTY',
		    items: ['a','b','c'],
		    array:[
		    	{x: 1},
		    	{x: 2},
		    	{x: 3},
		    	{x: 4},
		    	{x: 5},
		    	{x: 6},
		    	{x: 7},
		    	{x: 8},
		    	{x: 9},
		    	{x: 10},
		    	{x:7, o:9, z:10}
		    ]
		}


		this.onSubmit = this.onSubmit.bind(this)
		this.handleText = this.handleText.bind(this)
		this.handleChange = this.handleChange.bind(this)

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
		//console.log("componentWillMount");
	}


	componentWillUnmount(){
		//console.log("componentWillUnmount");
	}


	componentDidMount(){
		//console.log("componentDidMount");
	}

	componentDidUpdate(){
		//console.log("componentDidUpdate");
		//console.log(this.state)
	}


	componentWillUpdate(){
		//console.log("componentWillUpdate");
		//console.log(this.state)
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
			() => {this.props.geDataEjercicio1(this.state.form)}//respuesta de petición mapDispatchToProps

		)

		/*this.props.getDataEjercicio(this.state.form).then(
				response => {
					console.log("RESPONSE",response)
				}
		)
			this.props.login(this.state.form).then(
				response => {
					console.log("RESPONSE",response)
				}
		)*/
	}

	handleChange = (value, formattedValue) => {
		console.log(Utils.getSomething(this.state.array, {x:7}))
		 this.setState({
		 form:{...this.state.form, datePck: value, formattedValue: formattedValue, nuevoValor: 1000}
		       // ISO String, ex: "2016-11-19T12:00:00.000Z"
		      // Formatted String, ex: "11/19/2016"
		    });
	}

	onChange  = (event) =>  {
		//<Login propiedad={this.state} cambioTexto={this.handleText} />
		console.log("ev")
		console.log(this.state)
	    this.setState({term: event.target.value});
	  }

	onSubmit = (event) => {
	    event.preventDefault();
	    console.log("sub");
	    this.setState({
	      term: '',
	      items: [...this.state.items, this.state.term]
	    });
	  }

	render() {

		return(
			<div className="container">
				<TabsComponent propiedad={this.state} cambioTexto={this.handleText} onChange={this.handleChange} />

			</div>
		)
	}

}


const mapStateToProps = (state) => {
	return {
		dataEjercicio: state.DataEjercicioMod.get('actionData').toJS(),//nextProps - DataEjercicioMod -Modules
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		clearDataEjercicio:() => dispatch(clearDataEjercicio()),
		geDataEjercicio1:(form) => dispatch(getDataEj()),//getDataEj action Modules/InfoEjercicio/infoEjercicio
		login:(form) => dispatch(login())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(EjercicioData)
