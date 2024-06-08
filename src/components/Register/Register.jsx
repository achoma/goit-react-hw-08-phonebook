import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/tokenSlice.js';

import {
  StyledRegisterContainer,
  StyledRegisterForm,
  StyledRegisterTitle,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './RegisterStyles.js';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://connections-api.herokuapp.com/users/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        alert('Registration failed');
        return;
      }

      const data = await response.json();
      const token = data.token;

      dispatch(setToken(token));

      navigate('/contacts');
    } catch (error) {
      alert('Error during registration:', error);
    }
  };
  return (
    <StyledRegisterContainer>
      <StyledRegisterForm>
        <StyledRegisterTitle>Register</StyledRegisterTitle>
        <form onSubmit={handleSubmit}>
          <StyledLabel htmlFor="name">Name:</StyledLabel>
          <StyledInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <StyledInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <StyledLabel htmlFor="password">Password:</StyledLabel>
          <StyledInput
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <StyledButton type="submit">Register</StyledButton>
        </form>
      </StyledRegisterForm>
    </StyledRegisterContainer>
  );
};

export default Register;
