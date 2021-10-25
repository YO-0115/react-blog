import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HomePostList = styled.div`
  padding: 16px;
  max-width: 800px;
  margin: 40px auto;
`

export const HomePostTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.titleColor};
`

export const HomePostContainer = styled(Link)`
  border: 1px solid #ccc;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.postBoxShadow};
  color: #333;
  transition: all 0.1s;

  & + & {
    margin-top: 24px;
  }

  &:hover ${HomePostTitle} {
    color: ${({ theme }) => theme.hoverColor};
  }
`

export const HomePostBody = styled.div`
  font-size: 18px;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.textColor};

  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
`

export const HomePostAuthor = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.infoColor};
`

export const HomePostDate = styled.div`
  color: ${({ theme }) => theme.infoColor};
  font-size: 14px;
  margin-bottom: 16px;
`

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin: 28px 0 8px;
  color: ${({ theme }) => theme.titleColor};
`

export const PageBtn = styled.div`
  cursor: pointer;
  font-weight: bold;
  transition: all 0.1s;

  &:hover {
    color: ${({ theme }) => theme.hoverColor};
  }
`
export const CurrentPage = styled.div`
  margin: 0 16px;
`

export const TotalPage = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.titleColor};
`

export const Dots = styled.span``

export const Button = styled.button`
  margin: 4px;
  padding: 4px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: ${({ theme }) => theme.titleColor};
  transition: all 0.1s;

  &:hover {
    background: ${({ theme }) => theme.titleColor};
    color: ${({ theme }) => theme.backgroundColor};
  }
`
