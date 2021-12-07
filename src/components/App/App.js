import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../style/globalStyle'
import { theme } from '../../style/style'
import Header from '../Header'
import HomePage from '../../pages/HomePage'
import PostListPage from '../../pages/PostListPage'
import PostPage from '../../pages/PostPage'
import LoginPage from '../../pages/LoginPage'
import LoadingPage from '../../pages/LoadingPage'
import RegisterPage from '../../pages/RegisterPage'
import NewPostPage from '../../pages/NewPostPage'
import AboutPage from '../../pages/AboutPage'
import { AuthContext, LoadingContext } from '../../contexts'
import { getMe } from '../../WebAPI'
import { getAuthToken, getTheme } from '../../utils'

const Root = styled.div`
  padding-top: 64px;
`

function App() {
  const [user, setUser] = useState(null)
  const [isUser, setIsUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(getTheme())

  useEffect(() => {
    setIsUser(false)
    const getToken = getAuthToken()
    if (!getToken) return setIsUser(true)

    getMe().then((response) => {
      if (response.ok === 1) {
        setUser(response.data)
        setIsUser(true)
      }
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <ThemeProvider theme={theme[currentTheme]}>
          <Root>
            <Router>
              <GlobalStyle />
              <Header
                isUser={isUser}
                currentTheme={currentTheme}
                setCurrentTheme={setCurrentTheme}
              />
              {isLoading && <LoadingPage />}
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/posts-list">
                  <PostListPage isUser={isUser} />
                </Route>
                <Route path="/posts/:id">
                  <PostPage currentTheme={currentTheme} />
                </Route>
                <Route path="/new-post">
                  <NewPostPage />
                </Route>
                <Route path="/edit-post/:editId">
                  <NewPostPage edit="edit" />
                </Route>
                <Route path="/about">
                  <AboutPage />
                </Route>
                <Route path="/register">
                  <RegisterPage />
                </Route>
                <Route path="/login">
                  <LoginPage />
                </Route>
              </Switch>
            </Router>
          </Root>
        </ThemeProvider>
      </LoadingContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
