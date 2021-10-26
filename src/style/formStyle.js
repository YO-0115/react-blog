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

export const FormContainer = styled.form`
  width: 70%;
  margin: 56px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const FormTitleButton = styled.button`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.titleColor};
  padding-bottom: 16px;
  width: 100%;
  margin-bottom: 54px;
  border-bottom: 1px solid #ccc;
  animation: ${flow} 2s infinite;
`
export const FormInfo = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  & + & {
    margin-top: 48px;
  }
`

export const FormText = styled.div`
  margin-right: 24px;
  color: ${({ theme }) => theme.textColor};
  font-weight: 600;
`

export const FormInput = styled.input`
  display: block;
  padding: 6px 0;
  color: ${({ theme }) => theme.textColor};

  &::-webkit-input-placeholder {
    text-align: center;
  }

  &:focus {
    border-bottom: 1px solid #ccc;
  }
`

export const ErrorMessage = styled.div`
  color: red;
  position: absolute;
  top: 70px;
`
