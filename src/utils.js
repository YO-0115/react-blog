const TOKEN_NAME = 'token'
const THEME_NAME = 'theme'

export const setAuthToken = (token) => {
  localStorage.setItem(TOKEN_NAME, token)
}

export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_NAME)
}

export const setTheme = (theme) => {
  localStorage.setItem(THEME_NAME, theme)
}

export const getTheme = () => {
  return localStorage.getItem(THEME_NAME) || 'light'
}
