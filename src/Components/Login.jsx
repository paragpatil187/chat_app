import React from 'react'
import { auth, provider } from './firebaseconfig'
import "../Components/CSS/login.css"
import Button from '@material-ui/core/Button'
import { useStateValue } from './StateProvider'
import { actionTypes } from './Reducer'
const Login = () => {
    const [{user},dispatch]=useStateValue();

    const signIn=()=>{
        auth.signInWithPopup(provider).then(result=>
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
            ).catch(error=>(error.message))
    }
  return (
    <div className='login'>
        <div className="login_container">
            <img alt="" src="https://www.bing.com/th?id=OIP.1qSizqj2A8i2LRwI5nDcbgHaHz&w=195&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" />
            
        
        <div className="login_text">
            <h1>Sign In To App</h1>
        </div>
        <Button onClick={signIn}>Sign In With Google</Button>
        </div>
    </div>
  )
}

export default Login