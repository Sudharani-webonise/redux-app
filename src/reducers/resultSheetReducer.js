const resultSheetReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return {
        fetchData : true,
        result: action.results
      }
     case 'FAIL':
       return {
         fetchData : false,
         error : action.error
       }
    default:
      return state
  }
}

export default resultSheetReducer
