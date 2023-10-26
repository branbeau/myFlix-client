const data = {
  Username: username,
  Password: password
};

fetch("https://myflixapp-56b818d4e5ca.herokuapp.com/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
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
  .catch((e) => {
    alert("Something went wrong");
  });