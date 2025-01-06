/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Home from './components/Home'
import Genres from './components/Genres'
import GamePage from './components/GamePage'
import AllGames from './components/AllGames'
import { CurrentlyPlaying } from './components/CurrentlyPlaying'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element={<AppLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='/Genres'element={<Genres/>}/> 
    <Route path='/AllGames'element={<AllGames/>}/>
    <Route path='/GamePage/:Name'element={<GamePage/>}/>
    <Route path='/CurrentlyPlaying'element={<CurrentlyPlaying/>}/>
    </Route>
  )

)

export default router
