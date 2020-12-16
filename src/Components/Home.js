import React from 'react';
import {isUserloggedin} from '../Helpers';
import { Redirect } from "react-router-dom";
import Menu from './Menu'
const Home = () => {
    
    return ( 
        <>
             <Menu/>
            {
                !isUserloggedin()?
                <Redirect to="/login" />
                :
                <h1 style={{color:'green'}}>Home</h1>
            }

            
        </>
     );
}
 
export default Home;