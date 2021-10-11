import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createNewPost } from '../../WebAPI'
import {
  NewPostContainer,
  NewPostTitle,
  NewPostTitleInput,
  NewPostBody,
  NewPostContent,
  NewPostButton,
  ErrorMessage
} from './NewPostPageStyle'

function NewPostPage() {
  const [titleValue, setTitleValue] = useState('')
  const [postValue, setPostValue] = useState('')
  const [errorMessage, setErrorMessage] = useState()

  const history = useHistory()

  const handleTitleInput = (e) => {
    setTitleValue(e.target.value)
  }

  const handlePostInput = (e) => {
    setPostValue(e.target.value)
  }

  const handleInputFocus = () => {
    setErrorMessage(null)
  }

  const handleSendPost = async (e) => {
    e.preventDefault()
    setErrorMessage(null)

    if (!titleValue || !postValue) return setErrorMessage('未確實填寫')

    const data = await createNewPost(titleValue, postValue)

    if (data.id) {
      history.push(`/posts/${data.id}`)
    }
  }

  return (
    <NewPostContainer>
      <NewPostTitle>
        <NewPostTitleInput
          onFocus={handleInputFocus}
          onChange={handleTitleInput}
          placeholder="輸入標題..."
        />
      </NewPostTitle>
      <NewPostBody>
        <NewPostContent
          onFocus={handleInputFocus}
          onChange={handlePostInput}
          rows="20"
          placeholder="寫點內容..."
        >
          {postValue}
        </NewPostContent>
      </NewPostBody>
      <NewPostButton onClick={handleSendPost}>送出</NewPostButton>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </NewPostContainer>
  )
}

export default NewPostPage
