import React,{ useState }from 'react'
import useAuth from '../hooks/useAuth'
import styled from 'styled-components'
import { login, logout } from '../lib/auth'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import HeaderLink from './HeaderLink'

//Style
const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #a3b18a;
  box-shadow: 0 1px 5px #344e41;

@media(max-width:450px){
  display: ${props => (props.menuOpen ? 'block' : 'none')};
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #a3b18a;
  box-shadow: 0 1px 5px #344e41;
  width:100vw;
  height:6rem;
}
`;

const CompanyName = styled.h1`
  font-size: 60px;
  margin: 25px;

  @media(max-width:450px){
    font-size:2rem;
    margin:0 8px 0 8px;
  }
`

const HeaderUl = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0 8rem 0 0;
  @media (max-width: 450px) {
    display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
}


`

const HeaderLi = styled.li`
  font-size: 25px;
  margin: 25px;
  cursor: pointer;

  @media (max-width: 450px) {
    margin: 0; 
    margin-bottom: 10px;
    font-size: 25px;
    cursor: pointer;
}
`

const LoginBtn = styled.button`
  font-size: 30px;
  font-weight: bold;
  margin: 25px;
  background: none;
  border: none;
  appearance: none;
  cursor: pointer;

  
`

const LoginImg = styled(BiLogIn)`
  font-size: 30px;
  position: relative;
  top: 6px;

  @media (max-width: 450px) {
    display:none;
}
`

const LogoutBtn = styled.button`
  font-size: 30px;
  font-weight: bold;
  margin: 25px;
  background: none;
  border: none;
  appearance: none;
  cursor: pointer;

  
  @media (max-width: 450px) {
    font-size: 20px;
    background-color:white;
    border-radius:8px
}
`

const LogoutImg = styled(BiLogOut)`
  font-size: 30px;
  position: relative;
  top: 6px;

  @media (max-width: 450px) {
      display:none;
  }
`
const MenuButton = styled.button`
  font-size: 30px;
  font-weight: bold;
  background: none;
  border: none;
  appearance: none;
  cursor: pointer;
  display: none;

  @media (max-width: 450px) {
    display: block;
    margin: 0;
  }
`;
const HeaderSection= styled.div`
display:flex;
flex-direction:row;
align-items:center;


@media (max-width: 450px) {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${props => (props.menuOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #a3b18a;
  z-index: 1;
}
`

function Header() {
  const user = useAuth()
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); console.log('Menu button clicked');
  };

  return (
    <HeaderDiv>
      <CompanyName>FRIDGEFY</CompanyName>
          <MenuButton onClick={toggleMenu}>Menu</MenuButton>
      <HeaderSection menuOpen={menuOpen}>
      <HeaderUl>
        <HeaderLi>
          <HeaderLink href='/'>Home</HeaderLink>
        </HeaderLi>
        <HeaderLi>
          <HeaderLink href='/recipes'>Recipes</HeaderLink>
        </HeaderLi>
        <HeaderLi>
          <HeaderLink href='/shopping-list'>Shopping List</HeaderLink>
        </HeaderLi>
      </HeaderUl>
  
      {user ? (
        <LogoutBtn onClick={logout}>
          <LogoutImg />
          &nbsp;Logout
        </LogoutBtn>
      ) : (
        <LoginBtn onClick={login}>
          <LoginImg />
          &nbsp;Login
        </LoginBtn>
      )}
      </HeaderSection>
    </HeaderDiv>
  )
}

export default Header
