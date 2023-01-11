import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';

function Login() {
  let navigate = useNavigate();
  const {username, setUsername} = useContext(RecipeContext);

  const loginClickHandler = () => {
    // use querySelectors to retrieve the username and password for authentication
    const user = document.querySelector('#username').value;
    const pass = document.querySelector('#password').value;

    // add the username and password in a pseudo request body
    const reqBody = {
      username: user,
      password: pass
    };

    // POST request
    fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    })
      .then((res) => res.json())
      .then((data) => {
        // use useNavigate to redirect to home page
        navigate('/home');
      }).catch(err => {
        alert('username or password is invalid; try again or create a new account');
      })
  }

    return (
      <div className="login">
        <button onClick={() => navigate('/signup')}>Sign-Up</button>
        Login
        <input type="text" id="username" placeholder="username" required/>
        <input type="text" id="password" placeholder="password" required/>
        <button onClick={loginClickHandler}>Login</button>
      </div>
    )

}
export default Login;
