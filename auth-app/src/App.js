import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUpForm from './SignUpForm';
const baseUrl = 'http://localhost:3000/users'

function App() {
  const [user, setUser] = useState({});

  const signUp = (user) => {
    fetch(baseUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then(response => response.json())
      .then(({user, token}) => {
        localStorage.setItem('token', token)
        setUser(user)
    })
  }
  

  return (
    <div className="App">
      {user.username ? <h1>Welcome {user.username}!</h1> : <SignUpForm signUp={signUp} />}
    </div>
  );
}

export default App;
