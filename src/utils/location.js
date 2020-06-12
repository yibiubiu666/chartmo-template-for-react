/*
 * 获取 url 中的参数对象
 * 比如：http://localhost:8080?corpId=$CORPID$&version=1.0.0#/design?pageFrom=reports&reportKey=report6098114942691940
 * 结果：{ pageFrom: "reports", reportKey: "report6098114942691940" }
 */
export function getParams (url) {
  url = decodeURIComponent(url)
  const params = {}
  let headUrl = '', tailUrl = '';
  if (url.includes('#/')) {
    const flagIndex = url.indexOf('#/')
    headUrl = url.substr(0, flagIndex)
    tailUrl = url.substr(flagIndex + 1)
  }
  if (url.includes('/#/')) {
    const flagIndex = url.indexOf('/#/')
    headUrl = url.substr(0, flagIndex)
    tailUrl = url.substr(flagIndex + 1)
  }
  if (!(url.includes('#/') || url.includes('/#/'))) {
    headUrl = url
  }
  const urlAry = [headUrl, tailUrl]
  urlAry.forEach(item => {
    if (item.includes('?')) {
      const paramArr = item.substr(item.indexOf('?') + 1).split('&')
      paramArr.forEach(param => {
        const [key, value] = param.split('=')
        params[key] = unescape(value);
      });
    }
  });
  return params;
}

export function goPath (path) {
  const url = window.location.href.split('#/')[0] + '#' + path
  window.location.replace(url)
}
