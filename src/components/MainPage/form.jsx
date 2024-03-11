import React, { useState } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const Form = () => {
  const history = useState();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email.length === 0 || password.length === 0) {
      setError('Please enter details');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      if (response.status === 200) {
        history.push('/ProductsPage/Cards');
      }
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="content">
      <div className="text">Login</div>
      <form onSubmit={handleLogin}>
        <div className="field">
          <span className="fas fa-user"></span>
          <input
            type="text"
            placeholder="Email or Phone"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <span className="fas fa-lock"></span>
          <input
            type="password"
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="forgot-pass">
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit" className="submit">
          Log in
        </button>
        {error && <div className="errorMsg">{error}</div>}
      </form>
    </div>
  );
};

export default Form;
