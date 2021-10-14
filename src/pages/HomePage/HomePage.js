import React, { useState, useLayoutEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import MDEditor from '@uiw/react-md-editor'
import { getPosts } from '../../WebAPI'
import { LoadingContext } from '../../contexts'
import {
  HomePostContainer,
  HomePostTitle,
  HomePostAuthor,
  HomePostDate,
  HomePostBody,
  HomePostList,
  Pagination,
  PageBtn,
  CurrentPage,
  TotalPage,
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
    const homePagePosts = async () => {
      setIsLoading(true)
      setIsPaginationLoading(false)

      const data = await getPosts(page)
      setPosts(data.data)
      setTotalPostPages(Math.ceil((data.total - 1) / 5))

      setIsLoading(false)
      setIsPaginationLoading(true)
    }

    homePagePosts()
  }, [setIsLoading, page, totalPostPages])

  const handlePreBtnClick = () => {
    if (page > 1) {
      setPage(page - 1)
    }
    window.scrollTo(0, 0)
  }

  const handleNextBtnClick = () => {
    if (page < totalPostPages) {
      setPage(page + 1)
    }
    window.scrollTo(0, 0)
  }

  return (
    <HomePostList>
      {posts.map((post) => (
        <HomePost key={post.id} post={post} />
      ))}
      {isPaginationLoading && (
        <>
          <Pagination>
            <PageBtn onClick={handlePreBtnClick}>＜</PageBtn>
            <CurrentPage>{page}</CurrentPage>
            <PageBtn onClick={handleNextBtnClick}>＞</PageBtn>
          </Pagination>
          <TotalPage>
            {page} / {totalPostPages}
          </TotalPage>
        </>
      )}
    </HomePostList>
  )
}

export default HomePage
