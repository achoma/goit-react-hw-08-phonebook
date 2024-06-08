import { useSelector } from 'react-redux';
import { StyledNav, StyledUl, StyledLi, StyledLink } from './NavigationStyles';

const Navigation = () => {
  const token = useSelector(state => state.token);
  const isLoggedIn = token !== null;

  return (
    <StyledNav>
      <StyledUl>
        {!isLoggedIn && (
          <>
            <StyledLi>
              <StyledLink to="/register">📝 Register</StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/login">🔑 Login</StyledLink>
            </StyledLi>
          </>
        )}

        {isLoggedIn && (
          <>
            <StyledLi>
              <StyledLink to="/contacts">📞 Contacts</StyledLink>
            </StyledLi>
            <StyledLi>
              <StyledLink to="/user">👤 User</StyledLink>
            </StyledLi>
          </>
        )}
      </StyledUl>
    </StyledNav>
  );
};

export default Navigation;
