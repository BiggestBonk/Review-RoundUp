import {useGames} from '../hooks/hooks'

export function CurrentlyPlaying() {
    const {isPending, isError, data, error} = useGames()

    if (isPending) {
        return <p>Loading...</p>
    }
    if (isError || !data) {
        console.log(error)
        return <p>Problem loading games</p>
    }
    return (
        <>
            <header>
                <h2>{JSON.stringify(data)}</h2>
            </header>
        </>
    )
}
