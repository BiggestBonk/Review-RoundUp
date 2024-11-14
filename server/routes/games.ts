import { Router } from 'express'

import * as db from '../db/games.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const games = await db.getGames()

    res.json({ games })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// const rootUrl = 'https://api.igdb.com/v4/games'

// router.get('/', async () => {
//   fetch(rootUrl, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Client-ID': 'avs0voxfy6j5m5zz3iod2afatfx25z',
//       Authorization: `Bearer ${process.env.API_KEY}`,
//     },
//     body: 'fields name;limit 3',
//   })
//     .then((response) => {
//       console.log(response.json())
//     })
//     .catch((err) => {
//       console.error(err)
//     })
// })

export default router
