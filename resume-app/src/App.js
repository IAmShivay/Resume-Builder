import './App.css';
import ResumeTemplate from './Pages/ResumeTemplate';
import MyResume from './Pages/MyResume';
import {Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='ResumeTemplates' element={<ResumeTemplate />} />
        <Route path='/MyResumes' element={<MyResume />} />
      </Routes>
    </>


  );
}

export default App;


