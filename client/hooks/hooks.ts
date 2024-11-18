import { useQuery } from '@tanstack/react-query'

export function useGames() {
  return useQuery({
    queryKey: ['games'],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/`)
      return await res.json()
    },
  })
}

export function useGameCovers() {
  return useQuery({
    queryKey: ['covers'],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/covers`)
      return await res.json()
    },
  })
}
// export function useAddCurrentlyPlaying() {
//   const query = useQuery({ queryKey: ['fruits'], queryFn: getGenres })
//   return {
//     ...query,
//     // Extra queries go here e.g. addFruit: useAddFruit()
//   }
// }

// export function useFruitsMutation<TData = unknown, TVariables = unknown>(
//   mutationFn: MutationFunction<TData, TVariables>
// ) {
//   const queryClient = useQueryClient()
//   const mutation = useMutation({
//     mutationFn,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['genres'] })
//     },
//   })

//   return mutation
// }

// Query functions go here e.g. useAddFruit
/* function useAddFruit() {
  return useFruitsMutation(addFruit)
} */
