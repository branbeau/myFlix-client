import {useState} from 'react'

export function LoginView(){

const [Username, setUsername] = useState("")
const [Password, setPassword] = useState("")

fetch("https://myflixapp-56b818d4e5ca.herokuapp.com/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({Username, Password})
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Login response: ", data);
    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      onLoggedIn(data.user, data.token);
    } else {
      alert("No such user");
    }
  })
  .catch((e) => {
    alert("Something went wrong");
  });
  
  }
  
  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );