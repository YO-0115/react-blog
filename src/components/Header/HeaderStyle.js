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
  box-shadow: ${({ theme }) => theme.navBoxShadow};
  padding: 0 32px;
  background: ${({ theme }) => theme.backgroundColor};
  z-index: 50;

  ${MEDIA_QUERY_MD} {
    justify-content: space-between;
  }
`

export const IconWrapper = styled.div`
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 12px;
  overflow: hidden;
  cursor: pointer;

  & svg {
    path {
      fill: ${({ theme }) => theme.navTextColor};
    }
  }

  & svg:hover {
    path {
      fill: ${({ theme }) => theme.hoverColor};
    }
  }
`

export const Span = styled.span`
  display: block;
  width: 32px;
  height: 4px;
  margin-top: 5px;
  background: ${({ theme }) => theme.navTextColor};
  transition: all 0.1s;
`

export const Hamburger = styled.div`
  display: none;
  transition: all 0.1s;

  ${MEDIA_QUERY_MD} {
    cursor: pointer;
    display: block;

    &:hover ${Span} {
      background: ${({ theme }) => theme.hoverColor};
    }
  }
`

export const Brand = styled(Link)`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.navTextColor};
  transition: all 0.1s;
  margin-right: 8px;

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
    display: ${(props) => (props.$isMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    position: fixed;
    padding-top: 32px;
    top: 64px;
    left: 0;
    width: 100%;
    box-shadow: ${({ theme }) => theme.navBoxShadow};
    background: ${({ theme }) => theme.backgroundColor};
  }
`

export const NavbarList = styled.div`
  display: flex;
  align-items: center;
  height: 64px;

  ${MEDIA_QUERY_MD} {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`

export const Nav = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100px;
  color: ${({ theme }) => theme.navTextColor};
  transition: all 0.1s;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    height: 3px;
    background: ${({ theme }) => theme.hoverColor};
    transition: width 0.5s;
  }

  &:hover:before {
    width: 100px;
  }

  ${MEDIA_QUERY_MD} {
    margin-bottom: 16px;
    width: 100%;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 0;
      height: 0;
    }

    &:hover::before {
      width: 0;
    }

    &:hover {
      font-weight: 600;
      color: ${({ theme }) => theme.hoverColor};
    }
  }
`

export const ProgressContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 4px;
  z-index: 100;
`

export const ProgressBar = styled.div`
  width: ${props => props.$scroll};
  height: 4px;
  background: red;
`