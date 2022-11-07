
import { Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom"
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import AboutHome from './pages/AboutHome/AboutHome';
import CreateAd from './pages/CreateAd/CreateAd';
function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
      <Route path="/signUp" element={<LoginPage/>}  />
      <Route path='/' element={<HomePage/>}/>
      <Route path='/more' element={<AboutHome/>} />
      <Route path='/createAdvt' element={<CreateAd/>}/>
    </Routes>


    </div>
  );
}

export default App;
