import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

 export const HeaderContainer = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 32px;
  background: white;
  z-index: 50;
`

 export const Brand = styled(Link)`
  font-size: 32px;
  font-weight: bold;
  color: black;

  &:hover {
    color: #145df6;
  }
`

 export const NavbarList = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
`

 export const Nav = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100px;
  color: black;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    height: 2px;
    background: #145df6;
    transition: width 0.5s;
  }

  &:hover:before {
    width: 100px;
  }
`

 export const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  ${NavbarList} {
    margin-left: 64px;
  }
`
