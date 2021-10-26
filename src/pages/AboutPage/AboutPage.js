import React from 'react'
import { AboutContainer, AboutText } from './AboutPageStyle'

function AboutPage() {
  return (
    <AboutContainer>
      <AboutText>
        我是 YO 
        <br />
        這是一個前端用 React Hooks
        <br />
        後端串接 lidemy-student-json-api-server
        <br />
        集合而成的部落格
        <br />
      </AboutText>
    </AboutContainer>
  )
}

export default AboutPage
