import styled from 'styled-components'

export const AboutContainer = styled.div`
  max-width: 600px;
  height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 16px;
`

export const AboutText = styled.div`
  line-height: 1.8;
  font-size: 24px;
  color: ${({theme}) => theme.textColor};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -25px;
    left: -25px;
    width: 20px;
    height: 20px;
    border-top: 10px solid red;
    border-left: 10px solid red;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -25px;
    right: -25px;
    width: 20px;
    height: 20px;
    border-bottom: 10px solid red;
    border-right: 10px solid red;
  }
`
