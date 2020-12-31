import React,{useState,useEffect,useRef} from 'react'
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { useStateValue } from '../context_api/StateProvider';
import Login from '../Login';
import Create from './Create';
function CreateMessage() {

 const [{user},dispatch] = useStateValue();

    return (
        <div>
            {!user?(<Login/>):(
              <Create/>
            )

            }
           

        </div>
    )
}

export default CreateMessage
