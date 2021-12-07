import React, { useLayoutEffect, useState, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import MDEditor from '@uiw/react-md-editor'
import { getPostId, deletePost } from '../../WebAPI'
import { AuthContext, LoadingContext } from '../../contexts'
import Comments from '../../components/Comments'
import {
  PostContainer,
  EditButton,
  DeleteButton,
  PostTitle,
  PostBody,
  PostInfo,
  PostAuthor,
  PostCreatedAt,
  PostContent,
} from './PostPageStyle'

function PostPage({ currentTheme }) {
  const { id } = useParams()
  const { user } = useContext(AuthContext)
  const { setIsLoading } = useContext(LoadingContext)
  const history = useHistory()
  const [post, setPost] = useState({})

  useLayoutEffect(() => {
    const FetchGetPost = async () => {
      setIsLoading(true)

      const data = await getPostId(id)
      setPost(data)
      setIsLoading(false)
    }

    FetchGetPost()
  }, [setIsLoading, id])

  const handleDelete = () => {
    deletePost(id).then(() => {
      history.push('/posts-list')
    })
  }

  return (
    <PostContainer>
      <PostTitle>
        {post.title}
        {(post && post.userId) === (user && user.id) && (
          <>
            <EditButton to={`/edit-post/${post && post.id}`}>編輯</EditButton>
            <DeleteButton onClick={handleDelete}>刪除</DeleteButton>
          </>
        )}
      </PostTitle>
      <PostBody>
        <PostInfo>
          <PostAuthor>{post.user && post.user.nickname}</PostAuthor>
          <PostCreatedAt>
            {new Date(post.createdAt).toLocaleDateString()}
          </PostCreatedAt>
        </PostInfo>
        <PostContent>
          <MDEditor.Markdown source={post.body} />
        </PostContent>
      </PostBody>
      <hr />
      <Comments currentTheme={currentTheme} />
    </PostContainer>
  )
}

PostPage.propTypes = {
  currentTheme: PropTypes.string,
}

export default PostPage
