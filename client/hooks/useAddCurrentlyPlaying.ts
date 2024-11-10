import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { CurrentlyPlaying } from '../components/CurrentlyPlaying'
import request from 'superagent'

export default function useAddCurrentlyPlaying(id: number) {
  return useQuery({
    queryKey: ['game', id],
    queryFn: async () => {
      const res = await request.post(`/api/v4/events/${id}`)
      return res.body as Event
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
