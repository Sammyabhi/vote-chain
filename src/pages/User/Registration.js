
import React,{ Component } from 'react';
import './Registration.css';


function Registration () {
  
    return (
      <body className='register-body'>
       
        
           
            <div className= 'register-container'>
              <form class='register-form' action='#'>
                  <h1 className='register-h1'>Register</h1>
                  <span className='register-span'> Create your account </span>
                  <input className='register-input' type= "name" placeholder='Name'></input>
                  <input classname='register-input' type= 'age' placeholder='Age'></input>
                  <input classname='register-input' type= 'aadhar no' placeholder='Aadhar no'></input>
                  <input classname='register-input' type= 'account no' placeholder='Account no'></input>
                  <button> Register </button>
                  
               </form>


           </div>
           
           
        
       
          
           
        </body>
    );
     
};



export default Registration;