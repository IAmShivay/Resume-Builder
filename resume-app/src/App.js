import './App.css';
import ResumeTemplate from './Pages/ResumeTemplate';
import MyResume from './Pages/MyResume';
import {Routes, Route,Router } from 'react-router-dom';
import Home from './Pages/Home';
import VerticalTabs from './Components/Form';

function App() {
  return (
    <>
  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Resume Template' element={<ResumeTemplate />} />
        <Route path='/MyResumes' element={<MyResume />} />
        <Route path='/Resume Template/DetailsFilling' element={<VerticalTabs/>}/>
      </Routes>
    </>


  );
}

export default App;


