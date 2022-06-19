import { combineReducers } from "redux";
import { reducer as formreducer } from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";
export default combineReducers({
    auth : authReducer,
    form : formreducer,
    streams : streamReducer
})