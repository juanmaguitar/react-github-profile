import axios from 'axios'

export function getProfileData( username ) {
  const url = `http://api.github.com/users/${username}`
  return axios.get(url).then(response => response.data)
}