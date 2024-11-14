import connection from './connection.ts'
import { Game } from '../../models/Games.ts'

export async function getGames(db = connection): Promise<Game[]> {
  return db('games').select()
}

