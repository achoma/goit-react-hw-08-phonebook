import styled from 'styled-components';

export const PhonebookContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const PhonebookWrapper = styled.div`
  background-color: #1f2937;
  max-width: 750px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  padding: 2.5rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  border: 3px solid #ccc;
`;

export const PhonebookHeader = styled.h2`
  margin-top: 0;
  font-size: 2rem;
`;
