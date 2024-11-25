import { Router } from 'express'

const router = Router()

const rootUrl = 'https://api.igdb.com/v4'

router.get('/', async (req, res) => {
  const games = await fetch(rootUrl + '/games', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': 'avs0voxfy6j5m5zz3iod2afatfx25z',
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    body: 'fields *;where id = (302156,132058,165351);',
  })
  const jsonBody = await games.json()
  console.log(jsonBody)
  res.json(jsonBody)
})

router.get('/covers', async (req, res) => {
  const covers = await fetch(rootUrl + '/covers', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': 'avs0voxfy6j5m5zz3iod2afatfx25z',
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    body: 'fields height,width,image_id,url,game.name;where game=(302156,132058,165351);',
  })
  const jsonBody = await covers.json()
  console.log(jsonBody)
  res.json(jsonBody)
})

// router.get('/', async (req, res) => {
//   try {
//     const games = await db.getGames()

//     res.json({ games })
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: 'Something went wrong' })
//   }
// })

export default router
