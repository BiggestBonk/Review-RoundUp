import { useGames } from '../hooks/hooks'
import { Game } from '../../models/Games'

export function CurrentlyPlaying() {
  const { isPending, isError, data: games, error } = useGames()
  // const games = JSON.stringify(data)

  if (isPending) {
    return <p>Loading...</p>
  }
  if (isError || !games) {
    console.log(error)
    return <p>Problem loading games</p>
  }
  return (
    <>
      <main>
        <div>
          <p className='welcome-text'>Welcome to the homepage! Here you&apos;ll be able <br></br>
          to filter by genre or view all games I&apos;ve played.<br></br> Below, you&apos;ll find a list of the games I&apos;m currently playing.</p>
          <ul className='currently-playing-text'>
          {Object.keys(games).map((game, i) => (
            <li key={i}>{games[game].name}</li>
          ))}</ul>
        </div>
      </main>
    </>
  )
}
