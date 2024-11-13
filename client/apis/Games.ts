import request from 'superagent'

const rootUrl = 'https://api.igdb.com/v4/'

export async function getGames() {
  request
    .post(rootUrl)

    .set({
      Accept: 'application/json',
      'Client-ID': 'avs0voxfy6j5m5zz3iod2afatfx25z',
      Authorization: 'API_KEY',
    })
    .send('fields *;')

    .then((response) => {
      console.log(response.body)
      return response.body
    })
    .catch((err) => {
      console.error(err)
    })
}
