import React from "react";
import { connect } from "react-redux";
import { signIn ,signOut} from "../actions";
// connect
// signIn


class GoogleAuth extends React.Component {
    // state = {isSignedIn:null}
    componentDidMount(){
        window.gapi.load('client:auth2',() => {
            window.gapi.client.init({
                clientId:'184099711557-g7v0hvsr1b9raha7bhl2camuuofu3bgj.apps.googleusercontent.com',
                scope:'email'
            }).then(()=> {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                // this.setState({ isSignedIn: this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        })
    }
    onAuthChange = (isSignedIn) => {
        // console.log("Gapi Sign   "+isSignedIn)
        //  console.log(this.state.isSignedIn)
        // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        if(isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        }else{
            this.props.signOut()
        }
      };
    onSignIn = () => {
        this.props.signIn(this.auth.currentUser.get().getId())
        this.auth.signIn();
    }
    onSignOut = () => {
        this.props.signOut()
        this.auth.signOut();
    }
    renderAuthButton(){
        // if(this.state.isSignedIn === null ){
            // console.log(this.props.isSignedIn)
         if(this.props.isSignedIn === null ){
            return <div>I dont Know if we are Signed In</div>
        // }else if (this.state.isSignedIn){
        }else if (this.props.isSignedIn){
                        return (
                            <button onClick={this.onSignOut} className='ui red google button'>
                                <i className="google icon"/>
                            <div>Sign Out</div>
                            </button>
                            )
        } else {
            return (
                <button onClick={this.onSignIn} className='ui red google button'>
                <i className="google icon"/>
            <div> Sign In with Google</div>
            </button>)
        }
    }
    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}
const mapStateToProps =(state) => {
    // console.log("Redux Value    "+state.auth.isSignedIn)
    return { isSignedIn:state.auth.isSignedIn };
}
export default connect(mapStateToProps,{ signIn , signOut}) (GoogleAuth)
// gapi.auth2.getAuthInstance().signOut()