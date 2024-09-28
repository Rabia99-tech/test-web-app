import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import { useState } from 'react'
const App = () => {

const [playState, setPlayState] = useState(false)



  return (
    <div>
     <Navbar></Navbar>
     <Hero></Hero>
     <div className='container'>
     <Title   subTitle="Our program" title='What we offer' ></Title>
     <Programs></Programs>
     <About  setPlayState={setPlayState}   ></About>
     <Title   subTitle="Courses" title='What you get' ></Title>

        <Campus></Campus>
        <Title   subTitle="TESTIMONIALS" title='What Student Says' ></Title>
<Testimonials></Testimonials>

<Title   subTitle="Contact Us" title='Get in Touch' ></Title>

<Contact></Contact>
<Footer></Footer>
     </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState}></VideoPlayer>
    </div>
  )
}

export default App

