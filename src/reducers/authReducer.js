const INITIAL_STATE ={
    isSignedIn : null,
    userId : null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE,action) => {
 switch(action.type){
     case 'SIGN_OUT':
         return {...state,isSignedIn:false}
     case 'SIGN_IN':
            return {...state,isSignedIn:true,userId: action.payload }
    default :
    return state
        }
}