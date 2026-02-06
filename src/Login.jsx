import { useState } from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = () => {
    if (username === 'practice' && password === 'SuperSecretPassword!') {
      setMessage('You logged into a secure area!')
    } else {
      setMessage('Your password is invalid!')
    }
  }

  return (
    <div style={{ padding: '40px' }}>
      <h2>Login</h2>

      <input
        id="username"
        placeholder="Username"
        data-cy="username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        id="password"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button type="submit" onClick={handleLogin}>Login</button>

      <p>{message}</p>
    </div>
  )
}

export default Login
