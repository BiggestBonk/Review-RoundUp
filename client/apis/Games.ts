// export async function getGames() {
//   const rootUrl = 'https://api.igdb.com/v4/games'
//   await fetch(rootUrl, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Client-ID': 'avs0voxfy6j5m5zz3iod2afatfx25z',
//       Authorization: `Bearer ${process.env.API_KEY}`,
//     },
//     body: 'fields *;limit 3;',
//   })
//     .then((response) => {
//       console.log(response.json())
//     })
//     .catch((err) => {
//       console.error(err)
//     })
// }
