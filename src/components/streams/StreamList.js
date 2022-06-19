import React,{ useEffect, useState} from "react";

import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import streams from "../../apis/streams";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
    componentDidMount(){
           this.props.fetchStreams()
    }
    renderAdmin(stream){
        // console.log(this.props)
        // console.log(stream.userId)
        // console.log(this.props.currentUserId)
        // if(stream.id >2 ){
        if(stream.userId === this.props.currentUserId){
        return (
                <div className="right floated content">
                    {/* <button className="ui button primary">
                        EDIT
                    </button> */}
       <Link to={`/streams/edit/${stream.id}`} className ="ui button primary">Edit</Link>
       <Link to={`/streams/delete/${stream.id}`} className ="ui button negative">Delete</Link>
                    {/* <button className="ui button negative">
                        Delete
                    </button>   */}
            </div>
            )
        }
    }   
     renderList() {
        return this.props.streams.map(stream => {
          return (
            <div className="item" key={stream.id}>
              <i className="large middle aligned icon camera" />
              <div className="content">
                  <Link to={`/streams/${stream.id}`}>
                {stream.title}
                </Link>
                <div className="description">{stream.description}</div>
              </div>
              {this.renderAdmin(stream)}
            </div>
          );
        });
    }

    renderCreate(){
        // console.log(this.props.isSignedIn)
        if(this.props.isSignedIn){
            return(
                <div>
                    <Link to="/streams/new" className="ui button primary">
                    Create Stream
                    </Link>
                </div>
            )
        }
    }
    render(){
    return( 
        <div>
            <h2>Streams {this.componentDidMount()}</h2>
            <div className = 'ui celled list'>{this.renderList()}</div>
             {this.renderCreate()}
        </div> 
            )
    }
    
}
const mapStateToprops=(state)=>{
          return {

              streams :Object.values( state.streams),
              currentUserId: state.auth.userId,
              isSignedIn : state.auth.isSignedIn
            }
}

export default connect(mapStateToprops, { fetchStreams }) (StreamList)