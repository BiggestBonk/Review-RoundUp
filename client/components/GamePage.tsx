import { useParams } from 'react-router-dom'
import { useGameCovers } from '../hooks/hooks'

export default function GamePage() {
  const { isPending, isError, data } = useGameCovers()
  const { Name } = useParams()
  const size = 'cover_big'
  if (isPending) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Problem loading game</p>
  }

  console.log(Name)
  return (
    <div>
      <h1 className="game-title">{Name}</h1>
      <img
        className="game-art"
        loading="lazy"
        alt="cover art of featured game"
        src={`https://images.igdb.com/igdb/image/upload/t_${size}/c099md.png`}
      />
      <p className="game-info">Release Date: </p>
      <p className="game-info">Platform(s):</p>
      <p className="game-info">Metacritic Score:</p>
      <p className="game-info">Recorded Sales:</p>
      <p className="game-info">Micro-review:</p>
      <p className="game-info">Verdict:</p>
    </div>
  )
}
