import React from 'react'
import {Link} from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import { useStateValue } from '../context_api/StateProvider';
function HomeNav() {
    const [{user},dispatch] = useStateValue();
    let firstName;

    
    return (
        <div >
   

            <nav className="nav">
            <div className="logo"><h2>NEWYEAR</h2></div>
            
            <div className="right">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/wishes">Add Wish</Link>
           
           {
               user && (<div className="profile" >
               <Avatar  alt={user?.displayName}
                src={user?.photoURL} style={{marginLeft:"16px",marginTop:"-8px"}}/>
               <span>{user?.displayName}</span>
               </div>)
           }
         
         </div>
            
            </nav>
            
        
           
            
        </div>
    )
}

export default HomeNav
