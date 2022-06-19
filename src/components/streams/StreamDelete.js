import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream ,deleteStream} from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class StreamDelete extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
        console.log(this.props.match.params.id)
        console.log(this.props)
    }   

      renderActions(){
          const id = this.props.match.params.id
          return(
      <div>
               <button onClick={() => this.props.deleteStream(id)} className="ui button negative">
                        Delete
                    </button>
                    <Link to={`/`} className="ui button primary">Cancel</Link>
        </div>
        )
      }
      renderContent(){
          if(!this.props.stream){
              return 'Are you sure you want to delete this stream?'
          }
          return `Are you sure you wnat to delete the stream with title : ${this.props.stream.title}`
      }
    render(){
     return (
    <div> StreamDelete
        <Modal 
        title="Delete Stream"
        content={this.renderContent()}
        actions = {this.renderActions()}
        onDismiss={()=>history.push('/')}
        />
    </div>
        )
    }
}

const mapStateToprops = (state,ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToprops,{fetchStream , deleteStream})( StreamDelete)