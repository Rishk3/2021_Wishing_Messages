import React from 'react'
import {Button} from "@material-ui/core"
import { auth ,provider} from './database/firebase';
import { useStateValue } from './context_api/StateProvider';
import {actionTypes} from "./context_api/reducer"
import "./App.css"
import { Link } from 'react-router-dom';
function Login() {
    const [state,dispatch]=useStateValue();
    const signIn=()=>{
        console.log("clicked")
        auth.signInWithPopup(provider).then(result=>{
            console.log(result);
            localStorage.setItem("userObj", JSON.stringify(result.user));
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
        }).catch((err)=>{
            console.log(err.message);
        })
    }
    return (
        <div className="loginPage">

<div className="login__container" onClick={signIn}>
<img className="login__google" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt=""/>

           <Button >Sign In With Google</Button>
        </div>
        <p>Remember: Once you enter 2021. There is No coming Back,
    Login At your Own Rishk, Otherwise you may Go <Link className="link" to="/">Back to Home</Link> and Read everyone's New Year new Resolutions 
</p>
        </div>

        
        
    )
}

export default Login