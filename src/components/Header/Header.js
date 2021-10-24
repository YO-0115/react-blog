import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../../contexts'
import { setAuthToken } from '../../utils'
import {
  HeaderWrapper,
  Hamburger,
  Span,
  NavbarContainer,
  Brand,
  NavbarList,
  Nav,
} from './HeaderStyle'

const activeStyle = {
  fontWeight: '600',
  borderBottom: '2px solid rgba(0, 0, 0, 0.5)',
}

function Header({ isUser }) {
  const { user, setUser } = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogout = () => {
    setAuthToken('')
    setUser(null)
    setIsMenuOpen(false)
  }

  return (
    <HeaderWrapper>
      <Brand to="/">Blog</Brand>
      <Hamburger
        $isMenuOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Span />
        <Span />
        <Span />
      </Hamburger>
      {isUser && (
        <NavbarContainer $isMenuOpen={isMenuOpen}>
          <NavbarList>
            <Nav to="/posts-list" activeStyle={activeStyle} onClick={() => setIsMenuOpen(false)}>
              文章列表
            </Nav>
            <Nav to="/about" activeStyle={activeStyle} onClick={() => setIsMenuOpen(false)}>
              關於我
            </Nav>
            {user && (
              <Nav to="/new-post" activeStyle={activeStyle} onClick={() => setIsMenuOpen(false)}>
                發布文章
              </Nav>
            )}
          </NavbarList>
          <NavbarList>
            {!user && (
              <>
                <Nav to="/register" activeStyle={activeStyle} onClick={() => setIsMenuOpen(false)}>
                  註冊
                </Nav>
                <Nav to="/login" activeStyle={activeStyle} onClick={() => setIsMenuOpen(false)}>
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
        </NavbarContainer>
      )}
    </HeaderWrapper>
  )
}

Header.propTypes = {
  isUser: PropTypes.bool,
}

export default Header
