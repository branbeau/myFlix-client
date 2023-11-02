export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Send a login request to the API with the entered username and password
    fetch("https://myflixapp-56b818d4e5ca.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ Username: username, Password: password }) 
    })    
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);
        if (data.success) {
          // Store user and token in  localStorage
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          // Pass user and token to the onLoggedIn callback function
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user or wrong password");
        }
      })
      .catch((e) => {
        console.error(e);
        alert("Something went wrong");
      });
  };

  return (
    <div>
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
    </div>
  );
};