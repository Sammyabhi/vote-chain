import React from 'react';
import './App.css';
import Home from './components/Home';
import UserNavbar from './components/UserNavbar';
import AdminNavbar from './components/AdminNavbar';
import SignIn from './components/signin';
import AsignIn from './components/asignin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Guidlines from './pages/User/Guidlines';
import Registration from './pages/User/Registration';
import Vote from './pages/User/Vote';
import Logout from './pages/User/Logout';
import User from './pages/admin/user';
import Register from './pages/admin/Register';
import Candidate from './pages/admin/candidate';
import Phase from './pages/admin/phase';
import Results from './pages/User/Results';
import { NavigateBeforeOutlined } from '@material-ui/icons';


function App() {
  return (
    <>
      <Router>
          
        
          <Route path='/' exact component={Home} />
          <Route path='/signin' exact component={SignIn}/>
          <Route path='/asignin' exact component={AsignIn}/>
          
          <Switch>
            
          <Route path='/AdminNavbar' exact component={AdminNavbar} />
              
                
                  
                 
                  <Switch>
                  <Route path='/user' exact component={User} />
                  <Route path='/candidate' exact component={Candidate} />
                  <Route path='/register' exact component={Register} />
                  <Route path='/phase' exact component={Phase} />
                  <Route path='/logout' exact  component={Home} />
                </Switch>
                
                
            
          </Switch>
          
          <Switch>
           
              
               <Route path='/UserNavbar' exact component={UserNavbar} /> 
                
                <Switch>
                  <Route path='/guidlines' exact component={Guidlines} />
                  <Route path='/registration' exact component={Registration} />
                  <Route path='/vote' exact component={Vote} />
                  <Route path='/results' exact component={Results} />
                </Switch>
                    
              
            
            
           </Switch>
          
           
          
          
         
        </Router>
       
          
    </>
  );
};

export default App;