import React from 'react';
import Nav from '../Nav/Nav';
import Projects from '../Projects/Projects'
import About from '../About/About'

function Home () {
  return(
    <div className="Home">
      <Nav />
      <div className='home' style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        background: 'blue',
      }}>
        <h1>Welcome</h1>
        <h1>Lets Get Started</h1>
      </div>
      <Projects/>
      <About />
    </div>
  )
}

export default Home