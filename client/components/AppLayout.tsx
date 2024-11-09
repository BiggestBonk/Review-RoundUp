import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'


export default function AppLayout() {

  return (
    <>
      <Header></Header>
        <h1>Welcome</h1>
        <Outlet/>
        
        <Footer></Footer>
    </>
  )
}


