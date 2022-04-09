const BASE_URL = 'http://localhost:3001'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

function getFullPath(url, path) {
  return `${url}${path}`
}

function request(url, method = 'POST', data = null) {
  url = getFullPath(BASE_URL, url)
  const options = { headers, method }
  if (data) options.body = JSON.stringify({ ...data })
  return window.fetch(url, options)
}

function post(url, data) {
  const method = 'POST'
  return request(url, method, data).then((res) => res.json())
}

function get(url, id) {
  const method = 'GET'
  if (id) url = `${url}/${id}`
  return request(url, method).then((res) => res.json())
}

function kill(url, id) {
  const method = 'DELETE'
  if (id) url = `${url}/${id}`
  return request(url, method).then((res) => res.json())
}

function update(url, id, data) {
  const method = 'PUT'
  if (id) url = `${url}/${id}`
  return request(url, method, data).then((res) => res.json())
}

const http = {
  post,
  get,
  kill,
  update,
}

export default http
