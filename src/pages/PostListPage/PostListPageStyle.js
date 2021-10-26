import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PostList = styled.div`
  padding: 16px;
  max-width: 800px;
  margin: 40px auto;
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PostListButton = styled.div`
  margin: 0 8px;
  cursor: pointer;
  color: ${(props) => (props.$active ? 'red' : 'gray')};
  font-weight: ${(props) => (props.$active ? '600' : '')};
  transition: all 0.1s;

  &:hover {
    color:  ${({ theme }) => theme.hoverColor};
  }
`

export const Span = styled.span`
  color: ${({ theme }) => theme.textColor};
` 

export const YearContainer = styled.div`
  padding-top: 32px;

  & + & {
    margin-top: 32px;
  }
`

export const Year = styled.span`
  display: inline-block;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 24px;
  border-bottom: 3px solid ${({ theme }) => theme.hoverColor};
  color: ${({ theme }) => theme.titleColor};
`

export const PostContainer = styled(Link)`
  padding: 8px 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: ${({ theme }) => theme.backgroundColor};
  transition: all 0.1s;

  &:hover {
    transform: scale(1.1);
    border: 1px solid #ccc;
    box-shadow: ${({ theme }) => theme.postBoxShadow};
  }
`

export const PostTitle = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.titleColor};
  max-width: 600px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const PostDate = styled.div`
  color: ${({ theme }) => theme.infoColor};
  font-size: 14px;
`
