/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Home from './components/Home'
import GenreList from './components/GenreList'
import GamePage from './components/GamePage'
import GameList from './components/GameList'
import { CurrentlyPlaying } from './components/CurrentlyPlaying'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element={<AppLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='/genrelist'element={<GenreList/>}/> 
    <Route path='/gamelist'element={<GameList/>}/>
    <Route path='/gamepage/:id'element={<GamePage/>}/>
    <Route path='/currentlyplaying'element={<CurrentlyPlaying/>}/>
    </Route>
  )

)

export default router
