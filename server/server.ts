import express from 'express'
import * as Path from 'node:path'
// import request from 'superagent'
const server = express()
// const rootUrl = 'https://api.igdb.com/v4/games'
// request
//   .post(rootUrl)
//   .set({
//     Accept: 'application/json',
//     'Client-ID': 'avs0voxfy6j5m5zz3iod2afatfx25z',
//     Authorization: `Bearer ${process.env.API_KEY}`,
//   })
//   .send('fields name;limit 3')
//   .then((response) => {
//     console.log(request)
//     return response.body
//   })
//   .catch((err) => {
//     console.error(err)
//   })

// const rootUrl = 'https://api.igdb.com/v4/games'
// fetch(rootUrl, {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Client-ID': 'avs0voxfy6j5m5zz3iod2afatfx25z',
//     Authorization: `Bearer ${process.env.API_KEY}`,
//   },
//   body: 'fields name;limit 3',
// })
//   .then((response) => {
//     console.log(response.json())
//   })
//   .catch((err) => {
//     console.error(err)
//   })

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
