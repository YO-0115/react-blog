import styled from 'styled-components'

export const AboutContainer = styled.div`
  max-width: 600px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const AboutText = styled.div`
  text-align: center;
  line-height: 2;
  font-size: 32px;
  color: ${({theme}) => theme.textColor}
`
