import React from "react";

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <label>Username:</label>
        <input type="text" name="username" />
        <br />
        <label>Password:</label>
        <input type="password" name="password" />
        <br />
        <label>Confirm Password:</label>
        <input type="password" name="confirm_password" />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
