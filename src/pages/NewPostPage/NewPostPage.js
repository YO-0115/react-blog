/*eslint-disable*/
import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import MDEditor from '@uiw/react-md-editor'
import { getPostId, createNewPost, editPost } from '../../WebAPI'
import { AuthContext, LoadingContext } from '../../contexts'
import {
  NewPostContainer,
  NewPostTitle,
  NewPostTitleInput,
  NewPostBody,
  NewPostButton,
  ErrorMessage,
} from './NewPostPageStyle'

function NewPostPage({ edit }) {
  const [titleValue, setTitleValue] = useState('')
  const [postValue, setPostValue] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const isEdit = edit === 'edit'
  const { editId } = useParams()
  const { user } = useContext(AuthContext)
  const { setIsLoading } = useContext(LoadingContext)
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    const fetchPostData = async () => {
      setIsLoading(true)
      if (!user) return history.push('/')

      if (location.pathname === '/new-post') {
        setTitleValue('')
        setPostValue('')
        setIsLoading(false)
        return
      }

      if (isEdit) {
        const data = await getPostId(editId)
        if (user.id !== data.userId) return history.push('/')
        setTitleValue(data.title)
        setPostValue(data.body)
        setIsLoading(false)
      }
    }

    fetchPostData()
  }, [editId, location.pathname])

  const handleTitleInput = (e) => {
    setTitleValue(e.target.value)
  }

  const handleInputFocus = () => {
    setErrorMessage(null)
  }

  const handleSendPost = async (e) => {
    e.preventDefault()
    setErrorMessage(null)

    if (!titleValue || !postValue) return setErrorMessage('未確實填寫')

    let response = null

    if (isEdit) {
      response = await editPost(editId, titleValue, postValue)
    } else {
      response = await createNewPost(titleValue, postValue)
    }

    if (!response) return alert('系統錯誤!')

    if (response.id) {
      history.push(`/posts/${response.id}`)
    }
  }

  return (
    <NewPostContainer>
      <NewPostTitle>
        <NewPostTitleInput
          value={titleValue}
          onFocus={handleInputFocus}
          onChange={handleTitleInput}
          placeholder="輸入標題..."
        />
      </NewPostTitle>
      <NewPostBody>
        <MDEditor
          value={postValue}
          height={300}
          textareaProps={{
            placeholder: 'Please enter Markdown text',
          }}
          onChange={setPostValue}
        />
      </NewPostBody>
      <NewPostButton onClick={handleSendPost}>送出</NewPostButton>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </NewPostContainer>
  )
}

export default NewPostPage
