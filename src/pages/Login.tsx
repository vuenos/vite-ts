import React, { useState, useEffect, ChangeEvent } from 'react';

const Login = () => {
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string | number>("");

  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h1>Login</h1>

      <form>
        <label>ID</label>
        <input
          type="text"
          id="userEmail"
          value={input.email}
          onChange={handleChange}
          name="email"
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          id="userPass"
          value={input.password}
          onChange={handleChange}
          name="password"
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
