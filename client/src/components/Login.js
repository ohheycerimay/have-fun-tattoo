import { useState } from "react";

function Login({setUser}) {
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const handleInput = (e) => {
        setLogin({
          ...login,
          [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(login)
        })
        .then(r => {
            if (r.ok) {
                r.json().then(setUser)
                window.alert("Login successful")
            } else {
                r.json().then(console.error)
            }
        })
    }

    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Administrator Login</h2>
          <form onSubmit={handleLogin}>
            <label>Username: </label>
            <input
                type='username'
                name='username'
                value={login.username}
                placeholder='Enter username'
                onChange={handleInput}    
            />
            <br />
            <label>Password: </label>
            <input
                type='password'
                name='password'
                value={login.password}
                placeholder='Enter password'
                onChange={handleInput}    
            />
            <br />
            <button type="submit">Log In</button>
          </form>
        </div>
      </section>
    );
  }
  
  export default Login;