import styled from 'styled-components';

export const StyledLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledLoginForm = styled.div`
  padding: 30px;
  border: 3px solid #ccc;
  border-radius: 16px;
  background-color: #1f2937;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const StyledLoginTitle = styled.h2`
  font-size: 2rem;
`;

export const StyledLoginLabel = styled.label`
  display: block;
  margin-bottom: 16px;
  font-size: 1.5rem;
`;

export const StyledLoginInput = styled.input`
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 250px;

  font-size: 1.5rem;
`;

export const StyledLoginButton = styled.button`
  display: block;
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  font-size: 1.5rem;
  transition: background-color 0.3s;

  margin: auto;
  margin-top: 2rem;

  &:hover {
    background-color: #0056b3;
  }
`;
