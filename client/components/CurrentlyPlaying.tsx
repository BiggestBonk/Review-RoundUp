import { useGameCovers, useGames } from '../hooks/hooks'
import { Link } from 'react-router-dom'

export function CurrentlyPlaying() {
  const { isPending, isError, data: games, error } = useGames()
  const { isPending: isPend, isError: isErr, data: covers } = useGameCovers()
  if (isPending || isPend) {
    return <p>Loading...</p>
  }
  if (isError || !games || isErr) {
    console.log(error)
    return <p>Problem loading games</p>
  }
  const size = 'cover_big'
  return (
    <>
      <main>
        <div className="container">
          <p className="welcome-text">
            Welcome to the homepage! Here you&apos;ll be able <br></br>
            to filter by genre or view all games I&apos;ve played.<br></br>{' '}
            Below, you&apos;ll find a list of the games I&apos;m currently
            playing:
          </p>
          <div className="currently-playing wrapper">
            <ol className="currently-playing-cover-art">
              {Object.keys(covers).map((cover, i) => (
                <div className='alignment' key={i}>
                  <li>
                    <img
                      loading="lazy"
                      alt="cover art of featured game"
                      src={`https://images.igdb.com/igdb/image/upload/t_${size}/${covers[cover].image_id}.png`}
                    />
                  </li>
                  <li className='currently-playing-text'>
                    <Link to={`/GamePage/${covers[cover].game.name}`}>{covers[cover].game.name}</Link></li>
                </div>
              ))}
            </ol>
          </div>
        </div>
      </main>
    </>
  )
}
