import Async from 'react-code-splitting'

import 'bootstrap/dist/css/bootstrap.css'
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css'
import 'Assets/styles/font-awesome.min.css'
import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import 'Assets/styles/main.less'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'

const App  = props => <Async load={import('Containers/App')} componentProps={props} />
const Loading  = props => <Async load={import('Components/common/Loading')} componentProps={props} />
const NotFound = props => <Async load={import('Containers/404')} componentProps={props} />
const Modal = props => <Async load={import('Components/common/ModalMessage')} componentProps={props} />

const CallData = props => <Async load={import('Containers/CallClient/CallData')} componentProps={props} />

import configureStore from './store'

import { render } from 'react-dom'

import React from 'react'

let store = configureStore()

const Application = (props) => (
	<App {...props} >
		<Route path={`${props.match.url}/CallData`} component={CallData} />
	</App>)

render(
	<Provider store={store}>
		<Router>
			<div>
			<Loading />
			<Switch>
				<Route path={`/${process.env.APP}/home`} component={Application} />
				<Route component={NotFound} />
			</Switch>
			<Modal />
			</div>
		</Router>
	</Provider>,
	document.getElementById('app')
)
