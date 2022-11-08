import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
const linksArray = ["Home", "Resume Templates", "My Resume", "About Us"]
function Home() {
  return (
    <>
       <Navbar links={linksArray} />
      <br />
      <br />
      <br />
      <br />
      <Header/>
      
      <br />
    </>
    
  )
}

export default Home;
