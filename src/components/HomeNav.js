import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import { useStateValue } from '../context_api/StateProvider';
import { actionTypes } from '../context_api/reducer';
function HomeNav() {
    const [state,dispatch]=useStateValue();
    const [{user,likesCount}] =useStateValue();
    useEffect(() => {
        let result;
        if(localStorage.getItem("userObj")!=null){
            result=JSON.parse(localStorage.getItem("userObj"));
            console.log("localuser",result);
            dispatch({
                type:actionTypes.SET_USER,
                user:result,
            })
        }

    }, [])

    
    return (
        <div >
   

            <nav className="nav">
            <div className="logo" ><h3>NEWYEAR</h3></div>
            <div className="right">
            <Link className="link" to="/">World's Chat</Link>
           
           
           {
               user && (<div onClick={()=>{alert("Congrats! You Have entered to 2021 now there is no way to Go back")}} className="profile" >
               <Avatar   alt={user?.displayName}
                src={user?.photoURL} style={{marginTop:"-8px"}}/>
               <span>{user?.displayName}</span>
               </div>)
           }
         
         </div>
            
            </nav>
            
        
           
            
        </div>
    )
}

export default HomeNav
