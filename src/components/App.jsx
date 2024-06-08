import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserMenu from './UserMenu/UserMenu.jsx';
import Navigation from './Navigation/Navigation.jsx';
import Phonebook from './Phonebook/Phonebook.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';

const useIsAuthenticated = () => {
  const token = useSelector(state => state.token);

  return token !== null;
};

const App = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={''} />

        <Route
          path="/contacts"
          element={
            useIsAuthenticated() ? <Phonebook /> : <Navigate to="/login" />
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/user"
          element={
            useIsAuthenticated() ? <UserMenu /> : <Navigate to="/login" />
          }
        />

        <Route />
      </Routes>
    </>
  );
};

export default App;
