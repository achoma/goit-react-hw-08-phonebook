import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../redux/tokenSlice.js';
import {
  StyledLoginContainer,
  StyledLoginForm,
  StyledLoginTitle,
  StyledLoginLabel,
  StyledLoginInput,
  StyledLoginButton,
} from './LoginStyles';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleLogin = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/login',
        {
          email,
          password,
        }
      );

      const token = response.data.token;

      dispatch(setToken(token));

      localStorage.setItem('token', JSON.stringify(token));

      navigate('/contacts');
    } catch (error) {
      alert('Login failed:', error);
    }
  };

  return (
    <StyledLoginContainer>
      <StyledLoginForm>
        <StyledLoginTitle>Login</StyledLoginTitle>
        <form onSubmit={handleLogin}>
          <StyledLoginLabel htmlFor="email">Email:</StyledLoginLabel>
          <StyledLoginInput
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <StyledLoginLabel htmlFor="password">Password:</StyledLoginLabel>
          <StyledLoginInput
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <StyledLoginButton type="submit">Login</StyledLoginButton>
        </form>
      </StyledLoginForm>
    </StyledLoginContainer>
  );
};

export default Login;
