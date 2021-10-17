import React, { useLayoutEffect, useEffect, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { getPostsList, getUserPosts } from '../../WebAPI'
import { AuthContext, LoadingContext } from '../../contexts'
import {
  PostContainer,
  PostTitle,
  PostDate,
  PostList,
  ButtonWrapper,
  PostListButton,
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
  const { user } = useContext(AuthContext)
  const { setIsLoading } = useContext(LoadingContext)
  const [posts, setPosts] = useState([])
  const [postState, setPostState] = useState('allPosts')
  const [years, setYears] = useState([])

  useLayoutEffect(() => {
    const fetchPostList = async () => {
      setIsLoading(true)

      if (user) {
        const userId = user.id
        const data = await getUserPosts(userId)

        const posts = data.posts.sort((a, b) => {
          return a.createdAt < b.createdAt ? 1 : -1
        })
        setPosts(posts)
        setPostState('myPosts')
        setIsLoading(false)
        return
      }

      const data = await getPostsList()
      setPosts(data)
      setIsLoading(false)
    }

    fetchPostList()
  }, [setIsLoading, user])

  useEffect(() => {
    const yearsArray = []
    for (const post of posts) {
      yearsArray.push(new Date(post.createdAt).getFullYear())
    }

    setYears([...new Set(yearsArray)])
  }, [posts])

  const handleAllPosts = () => {
    setPostState('allPosts')
    const fetchPostList = async () => {
      setIsLoading(true)

      const data = await getPostsList()

      setPosts(data)
      setIsLoading(false)
    }
    fetchPostList()
  }

  const handleUserPosts = () => {
    setPostState('myPosts')
    const fetchUserPostList = async () => {
      setIsLoading(true)

      const userId = user.id
      const data = await getUserPosts(userId)
      const posts = data.posts.sort((a, b) => {
          return a.createdAt < b.createdAt ? 1 : -1
        })

      setPosts(posts)
      setIsLoading(false)
    }
    fetchUserPostList()
  }

  return (
    <PostList>
      {user && (
        <ButtonWrapper>
          {postState === 'allPosts' && (
            <>
              <PostListButton $active onClick={handleAllPosts}>
                all posts
              </PostListButton>{' '}
              /
              <PostListButton onClick={handleUserPosts}>
                my posts
              </PostListButton>
            </>
          )}
          {postState === 'myPosts' && (
            <>
              <PostListButton onClick={handleAllPosts}>
                all posts
              </PostListButton>{' '}
              /
              <PostListButton $active onClick={handleUserPosts}>
                my posts
              </PostListButton>
            </>
          )}
        </ButtonWrapper>
      )}
      {years.map((year, index) => {
        return (
          <YearContainer key={index}>
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
