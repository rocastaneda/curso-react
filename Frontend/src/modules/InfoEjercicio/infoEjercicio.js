import * as Utils from 'Assets/Utils'

import ClientHttpRequest from "Api/ClientHttpRequest"
import Immutable from 'immutable'
import { createModal } from 'Modules/Modal'
import {isLoading} from "Modules/Loading"

const initialState = Immutable.Map({}).set('actionData', new Immutable.Map({})).set('Get', new Immutable.Map({}))

/* Types */
export const ACTION_GET_DATA_EJERCICIO = 'ACTION_GET_DATA_EJERCICIO'
export const ACTION_LOGIN = 'ACTION_LOGIN'

/* Reducer */
export default (state = initialState, action) => {

    switch (action.type) {

		case ACTION_GET_DATA_EJERCICIO:
			//return {'Usuarios': ObjEjercicio}
			return state.set('actionData', new Immutable.Map(action.ObjEjercicio))
			break

		case ACTION_LOGIN:
			return state.set('Get', new Immutable.Map(action.ObjEjercicio))
			break
		default:
			return state;
    }
}

/* Action Creators */

export const getDataEj = (form) => {

	return (dispatch) => {

		dispatch(isLoading(true))

		return new ClientHttpRequest({
			service: 'api/getDataEjercici2',
			method: "POST",
			data: { ...form },
			headers: Object.assign({"Authorization": sessionStorage.access_token, "uid": sessionStorage.uid})
		}).request().then(response => {
			dispatch(isLoading(false))
			return dispatch({ type: ACTION_GET_DATA_EJERCICIO, ObjEjercicio: response.data })
			 //response.data
		}).catch(error => {
			dispatch(isLoading(false))
			dispatch(createModal(Utils.errorMessage(Utils.getMessageResponse(error.response.data))))
			throw error
		})
	}
}


export const login = (form) => {

	return (dispatch) => {

		dispatch(isLoading(true))

		return new ClientHttpRequest({
			service: 'api/login',
			method: "POST",
			data: { ...form },
			headers: Object.assign({"Authorization": sessionStorage.access_token, "uid": sessionStorage.uid})
		}).request().then(response => {
			dispatch(isLoading(false))
			dispatch({ type: ACTION_LOGIN, ObjEjercicio: response.data })
			return response
		}).catch(error => {
			dispatch(isLoading(false))
			dispatch(createModal(Utils.errorMessage(Utils.getMessageResponse(error.response.data))))
			throw error
		})
	}
}

export const clearDataEjercicio = () => {
	return (dispatch) => {
		dispatch({ type: ACTION_GET_DATA_EJERCICIO, ObjEjercicio: {} })
	}
}


