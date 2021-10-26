import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const COMMENTS_ID = 'comments-container'

function Comments({ currentTheme }) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.setAttribute('repo', 'YO-0115/react-blog')
    script.setAttribute('issue-term', 'pathname')

    if (currentTheme === 'light') {
      script.setAttribute('theme', 'github-light')
    } else {
      script.setAttribute('theme', 'github-dark')
    }

    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    const comments = document.getElementById(COMMENTS_ID)
    if (comments) comments.appendChild(script)

    return () => {
      const comments = document.getElementById(COMMENTS_ID)
      if (comments) comments.innerHTML = ''
    }
  }, [currentTheme])

  return <div id={COMMENTS_ID} />
}

Comments.propTypes = {
  currentTheme: PropTypes.string,
}

export default Comments
