import { connect } from 'react-redux'
import  { getResult }  from '../actions'
import ResultTable from '../components/ResultTable'

const mapStateToProps = (state) => {
    return {
        studResult: state.resultSheetReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllResluts: () =>  { dispatch(getResult()) }
    }
}

const GetResult = connect(
    mapStateToProps,
    mapDispatchToProps)
(ResultTable)

export default GetResult