import React from 'react';
import { useEffect } from 'react';
import {Link } from "react-router-dom";
import './signin.css';
/*import $ from "jquery";*/

function SignIn() {
   useEffect(() => {
        const signUpButton = document.getElementById('SignUp');
        const signInButton = document.getElementById('SignIn');
        const container = document.getElementById('signin-container');

        signUpButton.addEventListener('click',()=> {
            container.classList.add('right-panel-active');
        });

        signInButton.addEventListener('click',()=> {
            container.classList.remove('right-panel-active');
        });


    }, [])

    return(
        <body className='signin-body'>
        
        <div className='signin-container' id="signin-container">
            <div className= 'form-container sign-up-container'>
                <form className='signin-form' action='#'>
                    <h1 className='signin-h1'>Create Account</h1>
                    <span className='signin-span'> Use email for registration </span>
                    <input className='signin-input' type= "text" placeholder= 'Name'></input>
                    <input className='signin-input' type= 'email' placeholder= 'Email'></input>
                    <input className='signin-input' type= 'password' placeholder= 'Password'></input>
                    <button className='signin-button'> Sign Up</button>
                </form>

            </div>
            <div className= 'form-container sign-in-container'>
              <form className='signin-form' action='./Navbar'>
                  <h1 className='signin-h1'>Sign In</h1>
                  <span className='signin-span'> Use your account </span>
                  <input className='signin-input' type= "email" placeholder='Email'></input>
                  <input className='signin-input' type= 'password' placeholder='Password'></input>
                  <a className='signin-a' href = '#'>Forgot Your Password</a>
                  <Link to="./UserNavbar"><button> Sign In</button></Link>
                  
               </form>


           </div>
           <div className = 'overlay-container'>
               <div className = 'overlay'>
                   <div className = 'overlay-panel overlay-left'>
                       <h1>Welcome</h1>
                       <p className='signin-p'>To continue please login</p>
                       <button href='./UserNavbar' className = 'ghost' id = 'SignIn'>Sign In</button>
                   </div>
                   <div className = 'overlay-panel overlay-right'>
                       <h1 className='signin-h1'> Hello </h1>
                       <p className='signin-p'> Enter your personal details and start with us </p>
                       <button className = 'ghost' id = 'SignUp'>Sign UP</button>

                    </div>
               </div>
           </div>
        </div>
        </body>
    );

}
export default SignIn;