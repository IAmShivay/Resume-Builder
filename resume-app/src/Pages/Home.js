import React from 'react'
import Header from '../Components/Header'
import MiddleCom from '../Components/MiddleCom'
import Navbar from '../Components/Navbar'
const linksArray = ["Home", "Resume Template", "My Resume", "About Us"]
function Home() {
  return (
    <>
      <Navbar links={linksArray} />
      <Header/>
      <MiddleCom/>
      <br />
    </>
    
  )
}

export default Home;
