import React, { useState, useLayoutEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import MDEditor from '@uiw/react-md-editor'
import { getPosts } from '../../WebAPI'
import { LoadingContext } from '../../contexts'
import Paginator from './Paginator'
import {
  HomePostContainer,
  HomePostTitle,
  HomePostAuthor,
  HomePostDate,
  HomePostBody,
  HomePostList,
} from './HomePageStyle'

function HomePost({ post }) {
  return (
    <HomePostContainer to={`/posts/${post.id}`}>
      <HomePostTitle>{post.title}</HomePostTitle>
      <HomePostAuthor>{post.user && post.user.nickname}</HomePostAuthor>
      <HomePostDate>
        {new Date(post.createdAt).toLocaleDateString()}
      </HomePostDate>
      <HomePostBody>
        <MDEditor.Markdown source={post.body} />
      </HomePostBody>
    </HomePostContainer>
  )
}

HomePost.propTypes = {
  post: PropTypes.object,
}

function HomePage() {
  const { setIsLoading } = useContext(LoadingContext)
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPostPages, setTotalPostPages] = useState(0)
  const [isPaginationLoading, setIsPaginationLoading] = useState(null)

  useLayoutEffect(() => {
    const fetchGetHomePosts = async () => {
      setIsLoading(true)
      setIsPaginationLoading(false)

      const data = await getPosts(page)
      setPosts(data.data)
      setTotalPostPages(Math.ceil(data.total / 5))

      setIsLoading(false)
      setIsPaginationLoading(true)
    }

    fetchGetHomePosts()
    window.scroll(0, 0)
  }, [setIsLoading, page, totalPostPages])

  return (
    <HomePostList>
      {posts.map((post) => (
        <HomePost key={post.id} post={post} />
      ))}
      {isPaginationLoading && (
        <>
          {!!posts.length && !!totalPostPages && (
            <Paginator
              page={page}
              setPage={setPage}
              totalPostPages={totalPostPages}
            />
          )}
        </>
      )}
    </HomePostList>
  )
}

export default HomePage
