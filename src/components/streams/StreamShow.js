import React from "react";
import FlvJs from "flv.js";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
    constructor(props){
        super(props);
        this.videoRef = React.createRef(); 
    }

    componentDidMount(){
     this.props.fetchStream(this.props.match.params.id);
     this.buildplayer()
    }
    componentDidUpdate(){
        this.buildplayer()
    }

    buildplayer(){
        if(this.player || !this.props.stream){
            return ;
        }
        //  const { id } =this.props.match.params.id ;
        //  console.log(this.props.match.params.id )
        //  console.log(this.id)
     this.player= FlvJs.createPlayer({
         type:'flv',
         url:`http://localhost:8000/live/${this.props.match.params.id}.flv`
     })
     this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
    }
    componentWillUnmount(){
        // console.log("I Will unmount")
        this.player.destroy();
    }

    render(){
        if(!this.props.stream){
            return <div>Loading...</div>
        }
        const {title , description} = this.props.stream;

        return (
        <div>
            <video ref={this.videoRef} style = {{ width: '100%' }} controls={true}/> 
            <h1>{title}</h1>
            <h5>{description}</h5> 
        </div>
        )
    }

//    const StreamShow = () => {
//     return <div> StreamShow</div>
// }

}

 const mapStateToProps = (state , ownProps) => {
    return {stream : state.streams[ownProps.match.params.id]}
 }

export default connect (mapStateToProps ,{fetchStream})(StreamShow)