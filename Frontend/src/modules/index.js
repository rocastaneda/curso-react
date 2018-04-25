import Loading from './Loading'
import Modal from './Modal'
import DataClient from './DataClient'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
	Loading,
	Modal,

	DataClient
})

export default rootReducer
