import _ from 'lodash'
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
class StreamEdit extends React.Component {

    componentDidMount(){
      this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
      console.log(formValues)
      this.props.editStream(this.props.match.params.id,formValues)
    }

    render(){
    // console.log(_.pick(this.props.stream))
    return (
      <div>
        <h3>Edit a Stream</h3>
       <StreamForm 
       initialValues={_.pick(this.props.stream, 'title','description')}
      //  initialValues={{ title: 'EDIT ME',description: 'CHANGE ME TOO'}}
   onSubmit={this.onSubmit}/>
      </div>
    )
   }
 
}
const mapStateToprops=(state,ownProps) => {
        return {stream: state.streams[ownProps.match.params.id]}
    }


export default connect(mapStateToprops , {fetchStream , editStream})(StreamEdit);