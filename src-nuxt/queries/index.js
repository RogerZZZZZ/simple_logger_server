const queryCreator = (url, method, data, header = {'Content-Type': 'application/json'}) => {
  return {
    url: url,
    method: method,
    headers: header,
    data: JSON.stringify(data)
  }
}

let visitorScanQuery = (data) => {
  return queryCreator('/api/visitor/scan', 'post', data)
}

export {
  visitorScanQuery,
}