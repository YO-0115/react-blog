import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { MEDIA_QUERY_MD } from '../../style/style'

export const HeaderWrapper = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 32px;
  background: white;
  z-index: 50;

  ${MEDIA_QUERY_MD} {
    justify-content: space-between;
  }
`

export const Span = styled.span`
  display: block;
  width: 32px;
  height: 4px;
  margin-top: 5px;
  background: #333;
  transition: all 0.1s;
`

export const Hamburger = styled.div`
  display: none;
  transition: all 0.1s;

  ${MEDIA_QUERY_MD} {
    cursor: pointer;
    display: block;

    &:hover ${Span} {
      background: #145df6;
    }
  }
`

export const Brand = styled(Link)`
  font-size: 32px;
  font-weight: bold;
  color: black;
  transition: all 0.1s;
  margin-right: 32px;

  &:hover {
    color: #145df6;
  }
`

export const NavbarContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${MEDIA_QUERY_MD} {
    display: none;

    ${(props) =>
      props.$isMenuOpen &&
      `
      display: flex;
      flex-direction: column;
      align-items: center;
      position: fixed;
      //justify-content: flex-start;
      padding-top: 32px;
      top: 64px;
      left: 0;
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      background: white;
    `}
  }
`

export const NavbarList = styled.div`
  display: flex;
  align-items: center;
  height: 64px;

  ${MEDIA_QUERY_MD} {
    flex-direction: column;
    width: 100%;
    //margin-bottom: 16px;
    height: auto;
  }
`

export const Nav = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100px;
  color: black;
  transition: all 0.1s;

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

  ${MEDIA_QUERY_MD} {
    margin-bottom: 16px;
    width: 100%;

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 0;
      height: 0;
    }

    &:hover:before {
      width: 0;
    }

    &:hover {
      font-weight: 600;
      color: #145df6;
    }
  }
`
