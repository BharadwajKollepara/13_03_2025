import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Username:</label>
        <input type="text" name="username" />
        <br />
        <label>Password:</label>
        <input type="password" name="password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
