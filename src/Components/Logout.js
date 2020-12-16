import React from 'react';
import {isUserloggedin} from '../Helpers';
import { Redirect } from "react-router-dom";

const Logout = () => {
    function Logout(){
        localStorage.removeItem("login"); 
       <Redirect to="/login" />
    }
    return ( 
        
        <>
        {
            !isUserloggedin() ? 
            <Redirect to="/login" />
            :
            Logout()
        }
        logout
        </>

     );
}
 
export default Logout;