import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import UserCread from './Components/UserCread'


import Home from './Components/Home'
import Profile from './Components/Profile'
import Login from './Components/Login'
import Logout from './Components/Logout'
function App() {
  
  return (
    <Router>
     
    
        <Route exact path="/" component={Home}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/logout" component={Logout}/>
      

   
    </Router>
  );
}

export default App;
