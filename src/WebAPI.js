import { getAuthToken } from './utils'

const BASE_URL = 'https://student-json-api.lidemy.me'
const POST_LIMIT = 5

export const register = async (nickname, username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        nickname,
        username,
        password,
      }),
    })
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err.message)
  }
}

export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    const data = response.json()
    return data
  } catch (err) {
    console.log(err.message)
  }
}

export const getMe = async () => {
  const token = getAuthToken()
  try {
    const response = await fetch(`${BASE_URL}/me`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    const data = response.json()
    return data
  } catch (err) {
    console.log(err.message)
  }
}

export const getPostsList = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/posts?_sort=createdAt&_order=desc`
    )
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err.message)
  }
}

export const getPosts = async (page) => {
  try {
    const response = await fetch(
      `${BASE_URL}/posts?&_page=${page}&_limit=${POST_LIMIT}&_expand=user&_sort=createdAt&_order=desc`
    )
    const data = await response.json()
    const total = response.headers.get('x-total-count') 
    return { data, total }
  } catch (err) {
    console.log(err.message)
  }
}

export const getPostId = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}?_expand=user`)
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err.message)
  }
}

export const getUserPosts = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}?_embed=posts`)
    const data = await response.json()
    console.log(data)
    return data
  } catch (err) {
    console.log(err.message)
  }
}

export const createNewPost = async (title, body) => {
  const token = getAuthToken()
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
      }),
    })
    const data = response.json()
    return data
  } catch (err) {
    console.log(err.message)
  }
}

export const deletePost = async (id) => {
  const token = getAuthToken()
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json',
      }
    })
    const data = await response.json
    return data
  } catch (err) {
    console.log(err.message)
  }
}
