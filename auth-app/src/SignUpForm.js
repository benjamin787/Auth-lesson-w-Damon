import React, {useState} from 'react'

export default function SignUpForm({signUp}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    signUp({username, password});
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input name='username' value={username} onChange={({target}) => setUsername(target.value)}/>
      <label>Password</label>
      <input name='password' type='password' value={password} onChange={({target}) => setPassword(target.value)} />
      <input type='submit'/>
    </form>
  )
}