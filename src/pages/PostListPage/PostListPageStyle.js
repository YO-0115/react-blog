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
  color: ${(props) => (props.$active ? 'black' : 'gray')};
  font-weight: ${(props) => (props.$active ? '600' : '')};
  transition: all 0.1s;

  &:hover {
    color: #145df6;
  }
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
  border-bottom: 3px solid #145df6;
`

export const PostContainer = styled(Link)`
  padding: 8px 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: white;
  transition: all 0.1s;

  &:hover {
    transform: scale(1.1);
    border: 1px solid #ccc;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
`

export const PostTitle = styled.div`
  font-size: 24px;
  color: #333;
  max-width: 600px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const PostDate = styled.div`
  color: rgba(0, 0, 0, 0.7);
  font-size: 14px;
`
