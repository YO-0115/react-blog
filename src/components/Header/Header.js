import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../../contexts'
import { setAuthToken } from '../../utils'
import {
  HeaderContainer,
  LeftContainer,
  Brand,
  NavbarList,
  Nav,
} from './HeaderStyle'

const activeStyle = {
  'font-weight': '600',
  'border-bottom': '2px solid rgba(0, 0, 0, 0.5)',
}

function Header({ isUser }) {
  const { user, setUser } = useContext(AuthContext)

  const handleLogout = () => {
    setAuthToken('')
    setUser(null)
  }

  return (
    <HeaderContainer>
      {isUser && (
        <>
          <LeftContainer>
            <Brand to="/">Blog</Brand>
            <NavbarList>
              <Nav to="/posts-list" activeStyle={activeStyle}>
                文章列表
              </Nav>
              <Nav to="/about" activeStyle={activeStyle}>
                關於我
              </Nav>
              {user && (
                <Nav to="/new-post" activeStyle={activeStyle}>
                  發布文章
                </Nav>
              )}
            </NavbarList>
          </LeftContainer>
          <NavbarList>
            {!user && (
              <>
                <Nav to="/register" activeStyle={activeStyle}>
                  註冊
                </Nav>
                <Nav to="/login" activeStyle={activeStyle}>
                  登入
                </Nav>
              </>
            )}
            {user && (
              <Nav to="/" onClick={handleLogout}>
                登出
              </Nav>
            )}
          </NavbarList>
        </>
      )}
    </HeaderContainer>
  )
}

Header.propTypes = {
  isUser: PropTypes.bool,
}

export default Header
