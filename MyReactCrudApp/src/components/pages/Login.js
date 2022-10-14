// import React from "react";
import React, {useState,setState} from 'react';
import "./Signup.css";
function Login(){

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,password,confirmPassword);
    }

    return(
        <div className="main">
            <br/>
            <h1 style={{color: "white", textAlign:'center'}}>Login</h1>
        <div className="form">
          <div className="form-body">
              {/* <div className="username">
                  <label className="form__label" for="firstName"> Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div> */}
               <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Login</button>
          </div>
      </div>
      </div>
    );
}
export default Login;
