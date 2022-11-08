import './App.css';
import ResumeTemplate from './Pages/ResumeTemplate';
import MyResume from './Pages/MyResume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='Resumetemplates' element={<ResumeTemplate />} />
        <Route path='/Myresumes' element={<MyResume />} />
      </Routes>
    </>


  );
}

export default App;
