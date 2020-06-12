import qs from 'qs'
import { getParams } from '@/utils/location'

/*
 * 检查请求状态，此处处理请求错误，比如：404、502
 * docs: https://github.com/github/fetch
 */
function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

export function Fetch(url, params = {}, options = {}) {
  params = Object.assign(params, { userId: getParams(window.location.href).userId })
  url = `${url}?${qs.stringify(params)}`
  const defer = new Promise((resolve, reject) => {
    fetch(url, options)
      .then(checkStatus).then(parseJSON)
      .then(response => {
        resolve(response)
      })
      .catch(error => {
        reject(error)
      })
  })
  return defer
}
