import Main from './Main'
import {connect}from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import {withRouter} from 'react-router'
//import removePost from '../redux/actions'

function mapStateToProps(state){
return{
  todos: state
}
}
function mapDispatchToProps(dispatch) {
return bindActionCreators(actions,dispatch)

}
//this.props.state
const App=withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))

export default App
