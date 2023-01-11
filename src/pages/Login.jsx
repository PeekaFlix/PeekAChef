import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate();

  const clickHandler = () => {
    // use querySelectors to retrieve the username and password for authentication
    const user = document.querySelector('#username').value;
    const pass = document.querySelector('#password').value;

    // add the username and password in a pseudo request body
    const reqBody = {
      username: user,
      password: pass
    };

    // POST request
    fetch('users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
      .then((res) => res.json())
      .then((data) => {
        // use useNavigate to redirect to home page
      })
    })

        return (
            <div>
            Login
            <input type="text" id="username" placeholder="username" required/>
            <input type="text" id="password" placeholder="password" required/>
            <button onClick={clickHandler}>Login</button>
            </div>
        )
    }
}
export default Login;
