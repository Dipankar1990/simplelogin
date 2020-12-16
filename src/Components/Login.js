import React, { Component } from 'react'
import UserCread from './UserCread'
import {isUserloggedin} from '../Helpers';
import { Redirect } from "react-router-dom";
import Menu from './Menu'
class Login extends Component {
    state = { 
        user:"",
        pass: "",
        error: false
     }
     login(){
        this.setState({error:false})
        const inputuser = this.state.user
        const inputpass = this.state.pass
        if(inputuser === "" || inputpass === "" ){
            this.setState({error:true})
            alert('enter user name and pass ');
            return;

        }

        if(inputuser !== UserCread.user || inputpass !==  UserCread.pass ){
            this.setState({error:true})
            alert('enter right username and pass ');
            return;

        }
        //Start login process
        if(!this.state.error){
            localStorage.setItem('login', JSON.stringify({user:this.state.user, pass:this.state.pass})  )
            console.log(this.props.history.push('/'));



        }


     }
    render() { 
        if(isUserloggedin()){
           return <Redirect to="/" />
        }
        return ( 
            <>
                <Menu/>
                <input placeholder="username" type="text" onChange={(event)=>this.setState({user:event.target.value})} />
                <input placeholder="password" type="password" onChange={(event)=>this.setState({pass:event.target.value})} />
                <button onClick={()=>this.login()}>Login</button>
            </>

         );
    }
}
 
export default Login;