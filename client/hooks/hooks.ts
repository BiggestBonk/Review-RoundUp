import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

export function useGames() {
  return useQuery({
    queryKey: ['games'],
    queryFn: async () => {
      const res = await request.get('/')
      return res
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
