import React from "react";
import {connect} from "react-redux";
import moment from 'moment'
import _ from 'underscore'

//let optMeses = ['','enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
let optMeses = ['01','02','03','04','05','06','07','08','09','10','11','12']
	.map((v,i)=>{return (<option key={i} value={v}>{v}</option>);})

class DateInput extends React.Component {

	checkIfDate() {
		let fecha = '';
		if (this.state.dia && this.state.mes && this.state.anio && (Number(this.state.anio)>1800)) {
				fecha = this.state.anio + "-" + this.state.mes + "-" + this.state.dia;
		}
		this.props.onChange({target:{name:this.props.name,value:fecha}});
	}

	changeMonth(e) {
		let mes = !e ? '01': (typeof e) == "string" ? e : e.target.value;
		this.setState({mes},()=>{
			let optDias = [], dias, anio = Number(this.state.anio);
			switch (mes) {
				case '01': case '03': case '05': case '07': case '08': case '10': case '12':
					dias = 31;
					break;
				case '00':
					break;
				case '02':
					if (!(anio % 4) && ((anio % 100) || !(anio % 400))) {
						dias = 29;
					} else {
						dias = 28;
					}
					break;
				default:
					dias = 30;
			}
			for (var i = 0;i < dias; i++) {
				optDias.push(<option key={i} value={i< 9?'0'+(i+1):''+(i+1)}>{i< 9?'0'+(i+1):''+(i+1)}</option>);
			}
			this.setState({optDias},()=>{
				if (this.state.dia > dias) {
					this.changeDay({target:{name:this.props.name,value:''}});
				}
				this.checkIfDate();
			});
		});
	}

	changeYear(e) {
		this.setState({anio:e.target.value},()=>{
			if (this.state.mes) {
				this.changeMonth(this.state.mes)
			}
		});
		this.checkIfDate();
	}

	changeDay(e) {
		this.setState({dia:e.target.value},this.checkIfDate);
	}

	initSomething() {
		let currY=Number(moment().format('YYYY')), optAnios = _.range(currY,currY-100,-1).map((i)=>{return (<option key={i} value={i}>{i}</option>)});
		this.changeMonth('01');
		this.setState({mes:'', optAnios});
	}

	constructor(props) {
		super(props);
		this.state = {
			dia: '',
			mes: '',
			anio: '', //moment().format('YYYY'),
			optDias: [],
			optAnios: []
		}

		this.baseState = JSON.parse(JSON.stringify(this.state))
		
		this.changeDay = this.changeDay.bind(this);
		this.changeYear = this.changeYear.bind(this);
		this.changeMonth = this.changeMonth.bind(this);
	}

	componentDidMount() {
		let currY=Number(moment().format('YYYY')), optAnios = _.range(currY,currY-100,-1).map((i)=>{return (<option key={i} value={i}>{i}</option>)});
		this.changeMonth('01');
		this.setState({mes:'', optAnios});
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
		if(nextProps.cleanDates) {
			this.setState(this.baseState)
			this.initSomething()
		}
	}

	componentWillUpdate(nextProps, nextState) {
		if (!nextProps.value && (nextProps.value != this.props.value)) {
			this.setState({dia: '', mes: '', anio: ''});
		}
	}

	render() {
		let wrapperClass = "form-group";
		if (this.props.error && this.props.required && (!this.props.value)) {
			wrapperClass += " has-error";
		}

		let minY = moment(this.props.minDate).format('YYYY');
		let maxY = moment(this.props.maxDate).format('YYYY');

		return (
			<div className={wrapperClass}>
				<label className="control-label">
					{this.props.label}
					{this.props.required && <i className={'fa fa-circle requerido'} />}
				</label>
				<input type="hidden" name={this.props.name} value={this.props.value} />
				<div className="row">
					<div className="col-xs-4">
						<select className="form-control" disabled={this.props.disabled} value={this.state.anio} onChange={this.changeYear}>
							<option value="">{'YYYY'}</option>
							{this.state.optAnios}
						</select>
					</div>
					<div className="col-xs-4">
						<select className="form-control" disabled={this.props.disabled} value={this.state.mes} onChange={this.changeMonth}>
							<option value="">{'MM'}</option>
							{optMeses}
						</select>
					</div>
					<div className="col-xs-4">
						<select className="form-control" disabled={this.props.disabled} value={this.state.dia} onChange={this.changeDay}>
							<option value="">{'DD'}</option>
							{this.state.optDias}
						</select>
					</div>
				</div>
				{this.props.error && this.props.required && (!this.props.value) && <p>{'Este campo es requerido'}</p>}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	let maxDate = ownProps.maxDate=='now'? moment().format('YYYY-MM-DD'):ownProps.maxDate;
	return {
		error: ownProps.error,
		label: ownProps.label,
		name: ownProps.name,
		onChange: ownProps.onChange,
		required: ownProps.required,
		value: ownProps.value,
		maxDate: maxDate||'',
		minDate: ownProps.minDate||1900
	}
};

export default connect(mapStateToProps)(DateInput);
