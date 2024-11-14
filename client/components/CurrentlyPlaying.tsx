import { useQuery } from '@tanstack/react-query'

import { getGames } from '../apis/Games'

export function CurrentlyPlaying() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['games'],
    queryFn: () => getGames(),
  })

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
        <h2>{}</h2>
      </header>
    </>
  )
}
