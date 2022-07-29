import React from 'react'
import { auth, provider } from './firebaseconfig'
import "./login.css"
import Button from '@material-ui/core/Button'
const Login = () => {
    const signIn=()=>{
        auth.signInWithPopup(provider).then(result=>
            console.log(result)
            ).catch(error=>(error.message))
    }
  return (
    <div className='login'>
        <div className="login_container">
            
        </div>
        <div className="login_text">
            <h1>sign in to App</h1>
        </div>
        <Button onClick={signIn}>Sign In With Google</Button>

    </div>
  )
}

export default Login