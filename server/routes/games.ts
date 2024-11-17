import {Router} from 'express'

const router = Router()

const rootUrl = 'https://api.igdb.com/v4/games'

router.get('/', async (req, res) => {
    const games = await fetch(rootUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Client-ID': 'avs0voxfy6j5m5zz3iod2afatfx25z',
            Authorization: `Bearer ${process.env.API_KEY}`,
        },
        body: 'fields name;limit 3;',
    })
    const jsonBody = await games.json()
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
