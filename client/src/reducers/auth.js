const authReducer=(state={loggedIn:false,authData:null},action)=>{
    switch(action.type){
        case 'AUTH':
            localStorage.setItem('profile',JSON.stringify({...action?.data}))
            return {...state,loggedIn: true,authData:action?.data}

        case 'LOGOUT':
            localStorage.clear()
            return {...state,loggedIn: false,authData:null}

        default:
            return state

    }

}

export default authReducer