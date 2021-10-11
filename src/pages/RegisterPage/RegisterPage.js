import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { register, getMe } from '../../WebAPI'
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
  const [nickname, setNickname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage(null)

    const registerResponse = await register(nickname, username, password)

    if (!registerResponse.ok) {
      setErrorMessage(registerResponse.message)
      return
    }

    setAuthToken(registerResponse.token)

    const getMeResponse = await getMe()

    if (!getMeResponse) {
      setAuthToken(null)
      setErrorMessage(getMeResponse.toString())
    }
    setUser(getMeResponse.data)
    history.push('/')
  }

  const handleNicknameInput = (e) => {
    setNickname(e.target.value)
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
      <FormTitleButton>註冊</FormTitleButton>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <FormInfo>
        <FormText>nickname</FormText>
        <FormInput
          value={nickname}
          onChange={handleNicknameInput}
          onFocus={handleInputFocus}
        />
      </FormInfo>
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
