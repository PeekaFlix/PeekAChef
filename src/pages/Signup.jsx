import React from "react";
import { useNavigate } from 'react-router-dom';

function Signup() {
  let navigate = useNavigate();
  const clickHandler = () => {
    const newUser = document.querySelector('#newUsername').value;
    const newPass = document.querySelector('#newPassword').value;

    const reqBody = {
      username: newUser,
      password: newPw
    }

    // POST request
    fetch('/users/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    })
        .then((res) => res.json())
        .then((data) => {
          // use useNavigate to redirect to login page
          navigate('/');
          alert('Account successfully created! Please log in!');
        }).catch(err => {
            alert('username or password is invalid');
          })
  }

  return (
    <div className="signup">
      <input type="text" id="newUsername" placeholder="username" required/>
      <input type="password" id="newPw" placeholder="password" required/>
      <button onClick={clickHandler}>Sign Up</button>
    </div>
  )
}

export default Signup
