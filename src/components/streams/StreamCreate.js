import React from "react";
// import { Field,reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";





class StreamCreate extends React.Component {
    // renderInput(formProps , {label}){
    //     // console.log(formProps)
    //     console.log(label)
    //         return (
    //             <div className="field">
    //              <label>{label}</label>
    //              <input onChange={formProps.input.onChange} value = {formProps.input.value}/>
    //              </div>
    //         )
    // }


              //  1
    // renderInput({ input, label }) {
    //     return (
    //       <div className="field">
    //         <label>{label}</label>
    //         <input {...input} />
    //       </div>
    //     );
    //   }


      
      onSubmit =(formValues)=> {
        this.props.createStream(formValues)
      }
    
          // 2
      // render() {
      //   return (
      //     <form
      //     onSubmit={this.props.handleSubmit(this.onSubmit)}
      //       className="ui form"
      //     >
      //       <Field name="title" component={this.renderInput} label="Enter Title" />
      //       <Field
      //         name="description"
      //         component={this.renderInput}
      //         label="Enter Description"
      //       />
      //       <button className="ui button primary">Submit</button>
      //     </form>
      //   );
      // }

        render() {
        return (
          <div>
            <h3> Create a Stream</h3>
            <StreamForm onSubmit={this.onSubmit}/>
          </div>
        )
        }
    }

          // 3
    // const formWrapped = reduxForm({
    //   form:'streamCreate'
    // })(StreamCreate)

    // export default connect (null ,{createStream})(formWrapped) 

    
    export default connect (null ,{createStream})(StreamCreate)