import { useGames } from '../hooks/hooks'

export function CurrentlyPlaying() {
  const { isPending, isError, data, error } = useGames()

  if (isPending) {
    return <p>Loading...</p>
  }
  if (isError) {
    console.log(error)
    return <p>Problem loading games</p>
  }
  console.log(data)
  return (
    <>
      <header>
        <h2>{data.body}</h2>
      </header>
    </>
  )
}
