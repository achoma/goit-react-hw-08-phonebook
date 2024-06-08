import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { clearToken } from '../../redux/tokenSlice.js';

import {
  StyledUserMenuContainer,
  StyledUserInfo,
  StyledLogoutButton,
  StyledUserMenuCard,
} from './UserMenuStyles';

const fetchUserEmail = async token => {
  try {
    const response = await axios.get(
      'https://connections-api.herokuapp.com/users/current',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching user email:', error);
    throw error;
  }
};

const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (token) {
      fetchUserEmail(token)
        .then(({ email, name }) => {
          setUserInfo({ email, name });
        })
        .catch(error => {
          console.error('Error fetching user email:', error);
        });
    }
  }, [token]);

  const handleLogout = () => {
    dispatch(clearToken());
    navigate('/login');
  };

  return (
    <StyledUserMenuContainer>
      {userInfo && (
        <>
          <StyledUserMenuCard>
            <StyledUserInfo>User: {userInfo.name}</StyledUserInfo>
            <StyledUserInfo>Email: {userInfo.email}</StyledUserInfo>
            <StyledLogoutButton onClick={handleLogout}>
              Logout
            </StyledLogoutButton>
          </StyledUserMenuCard>
        </>
      )}
    </StyledUserMenuContainer>
  );
};

export default UserMenu;
