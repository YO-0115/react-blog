import React, { useLayoutEffect, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { getPostsList } from '../../WebAPI'
import { LoadingContext } from '../../contexts'
import {
  PostContainer,
  PostTitle,
  PostDate,
  PostList,
  YearContainer,
  Year,
} from './PostListPageStyle'

function Post({ post }) {
  return (
    <PostContainer to={`/posts/${post.id}`}>
      <PostTitle>{post.title}</PostTitle>
      <PostDate>
        {new Date(post.createdAt).toLocaleDateString().substring(5, 10)}
      </PostDate>
    </PostContainer>
  )
}

Post.propTypes = {
  post: PropTypes.object,
}

function PostListPage() {
  const { setIsLoading } = useContext(LoadingContext)
  const [posts, setPosts] = useState([])
  const [years, setYears] = useState([])

  useLayoutEffect(() => {
    const PostsList = async () => {
      setIsLoading(true)

      const data = await getPostsList()
      setPosts(data)

      const yearsArray = []
      for (const post of posts) {
        yearsArray.push(new Date(post.createdAt).getFullYear())
      }
      setYears([...new Set(yearsArray)])

      setIsLoading(false)
    }

    PostsList()
  }, [setIsLoading, posts])

  return (
    <PostList>
      {years.map((year) => {
        return (
          <YearContainer>
            <Year>{year}</Year>
            {posts
              .filter((post) => new Date(post.createdAt).getFullYear() === year)
              .map((post) => (
                <Post key={post.id} post={post} />
              ))}
          </YearContainer>
        )
      })}
    </PostList>
  )
}

export default PostListPage
