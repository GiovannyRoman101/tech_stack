
// the function is called an action creater
export const selectLibrary =(libraryId) =>{
	return {
		type:'select_library',
		payload:libraryId
	}
}