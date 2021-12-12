export const getError = () => {
	return {type:"SET_ERROR_LOGIN_FALSE", load: null}
}

export const getErrorRegister = (formtype,formvalue) => {

	return {type: "SET_ERROR_REGISTER", formtype, formvalue}
}