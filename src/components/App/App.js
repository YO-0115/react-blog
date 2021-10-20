import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyle from '../../style/globalStyle'
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
import { getAuthToken } from '../../utils'

const Root = styled.div`
  padding-top: 64px;
`

function App() {
  const [user, setUser] = useState(null)
  const [isUser, setIsUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsUser(false)
    const getToken = getAuthToken()
    if (!getToken) return setIsUser(true)

    getMe().then((response) => {
      if (response.ok) {
        setUser(response.data)
        setIsUser(true)
      }
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <Root>
          <Router>
            <GlobalStyle />
            <Header isUser={isUser} />
            {isLoading && <LoadingPage />}
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/posts-list">
                <PostListPage />
              </Route>
              <Route path="/posts/:id">
                <PostPage />
              </Route>
              <Route path="/new-post">
                <NewPostPage />
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
      </LoadingContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
