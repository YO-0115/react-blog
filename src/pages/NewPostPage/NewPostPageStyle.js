import styled, { keyframes } from 'styled-components'

export const flow = keyframes`
  0% {
    border-bottom: 1px solid #ccc;
  }

  50% {
    border-bottom: 1px solid #145df6;
    color: #145df6;
  }

  100% {
    border-bottom: 1px solid #ccc;
  }
`

export const NewPostContainer = styled.div`
  max-width: 800px;
  margin: 56px auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
`

export const NewPostTitle = styled.label`
  margin-bottom: 54px;
  width: 100%;
`

export const NewPostTitleInput = styled.input`
  width: 100%;
  padding: 4px 8px;
  text-overflow: ellipsis;
  overflow: auto;

  &:focus {
    border-bottom: 1px solid #333;
  }
`

export const NewPostBody = styled.label`
  display: block;
  margin-bottom: 54px;
`

export const NewPostContent = styled.textarea`
  width: 100%;
  padding: 16px 8px;
`

export const NewPostButton = styled.button`
  background: none;
  padding-bottom: 4px;
  font-size: 18px;
  font-weight: bold;
  animation: ${flow} 2s infinite;
`

export const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin-top: 16px;
`
