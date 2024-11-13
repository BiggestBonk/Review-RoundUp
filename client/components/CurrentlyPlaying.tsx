import { useQuery } from '@tanstack/react-query'

import { getGames } from '../apis/Games'

export function CurrentlyPlaying() {
  const { isPending, isError, data } = useQuery({
    queryKey: ['games'],
    queryFn: () => getGames(),
  })

  if (isPending) {
    return <p>Loading...</p>
  }
  if (isError) {
    return <p>Problem loading games</p>
  }
  return (
    <>
      <header>
        <h2>{data}</h2>
      </header>
    </>
  )
}
