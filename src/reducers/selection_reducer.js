export default (state = null,action) => {
	// always check actions if matching
	switch(action.type){
	case 'select_library':
		return action.payload
	default:
		return state
	}
}