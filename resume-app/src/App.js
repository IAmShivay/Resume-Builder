import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
const linksArray = ["Home","Resume Templates","My Resume","About Us"]

function App() {
  return (
    <div>
      <Navbar links={linksArray}/><br />
      <br />
      <br />
      <br />
      <Header/>
    </div>
  );
}

export default App;
