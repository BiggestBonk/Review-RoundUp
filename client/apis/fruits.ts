import request from 'superagent'

const rootUrl = '/api/v1'

export function getGenres(): Promise<string[]> {
  return request.get(rootUrl + '/genres').then((res) => {
    return res.body.fruits
  })
}
