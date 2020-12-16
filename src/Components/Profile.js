import React from 'react';
import {isUserloggedin} from '../Helpers';
import { Redirect } from "react-router-dom";
import Menu from './Menu'
/* efwergwegrw*/
const Profile = () => {
    return ( 
    <>
   <Menu />
   {
                !isUserloggedin()?
                <Redirect to="/login" />
                :
                <h1 style={{color:'green'}}>Profile</h1>
            }

    </> );
}
 
export default Profile;