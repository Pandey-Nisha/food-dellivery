import React ,{lazy, Suspense} from 'react'
import './Home.css'
import Header from '../../Component/Header/Header.jsx'
// import Exploremenu from '../../Component/Exploremenu/Exploremenu.jsx'
import { useState } from 'react'
// import Fooddisplay from '../../Component/Fooddisplay/Fooddisplay.jsx'

const  Exploremenu = lazy(() => import('../../Component/Exploremenu/Exploremenu.jsx'));
const Fooddisplay = lazy(() => import('../../Component/Fooddisplay/Fooddisplay.jsx'));
const Home = () => {

  const [category, setCategory] = useState("null");

  return (
    <div>
      <Suspense fallback={<h1>Loading......</h1>} >
      <Header />
      <Exploremenu category = {category} setCategory = {setCategory}/>
      <Fooddisplay category={category}/>
      </Suspense>
    </div>
  )
}

export default Home;
