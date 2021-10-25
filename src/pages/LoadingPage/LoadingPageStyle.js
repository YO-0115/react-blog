import styled, { keyframes } from 'styled-components'

const flow = keyframes`
  0% {
    border-bottom: 3px solid #ccc;
  }

  50% {
    border-bottom: 3px solid #145df6;
    color: #333;
  }

  100% {
    border-bottom: 3px solid #ccc;
  }
`

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.backgroundColor};
  z-index: 10;
`
export const Loading = styled.div`
  font-size: 48px;
  padding: 0 24px 16px;
  color: #ccc;
  animation: ${flow} 2s infinite;
`
