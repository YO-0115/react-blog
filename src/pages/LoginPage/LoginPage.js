import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { login, getMe } from '../../WebAPI'
import { setAuthToken } from '../../utils'
import { AuthContext } from '../../contexts'
import {
  FormContainer,
  FormTitleButton,
  FormInfo,
  FormInput,
  FormText,
  ErrorMessage,
} from '../../style/formStyle'

function LoginPage() {
  const { setUser } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage(null)

    const loginResponse = await login(username, password)

    if (!loginResponse.ok) {
      setErrorMessage(loginResponse.message)
      return
    }

    setAuthToken(loginResponse.token)

    const getMeResponse = await getMe()

    if (!getMeResponse) {
      setAuthToken(null)
      setErrorMessage(getMeResponse.toString())
      return
    }
    setUser(getMeResponse.data)
    history.push('/')
  }

  const handleUsernameInput = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordInput = (e) => {
    setPassword(e.target.value)
  }

  const handleInputFocus = () => {
    setErrorMessage(null)
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitleButton>登入</FormTitleButton>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <FormInfo>
        <FormText>username</FormText>
        <FormInput
          value={username}
          onChange={handleUsernameInput}
          onFocus={handleInputFocus}
        />
      </FormInfo>
      <FormInfo>
        <FormText>password</FormText>
        <FormInput
          type="password"
          value={password}
          onChange={handlePasswordInput}
          onFocus={handleInputFocus}
        />
      </FormInfo>
    </FormContainer>
  )
}

export default LoginPage
