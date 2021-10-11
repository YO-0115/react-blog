import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 70%;
  margin: 56px auto;
`

export const PostTitle = styled.div`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #ccc;
  word-wrap: break-word;
  word-break: break-all;
`

export const PostBody = styled.div`
  padding: 16px 18px 0;
  max-width: 800px;
  margin: 0 auto;
`

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`

export const PostAuthor = styled.div`
  font-size: 16px;
  color: #333;
  margin-bottom: 4px;
`

export const PostCreatedAt = styled.div`
  font-size: 14px;
  text-align: right;
  color: gray;
`

export const PostContent = styled.div`
  margin-bottom: 28px;
  line-height: 1.7;
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
`
