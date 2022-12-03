
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import AboutHome from './pages/AboutHome/AboutHome';
import CreateAd from './pages/CreateAd/CreateAd';
import MyProfile from './pages/MyProfile/MyProfile';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initialize } from './redux/housesSlice';
import PublicRoute from './route/PublicRoute';
import PrivateRoute from './route/PrivateRoute';
function App() {

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(initialize())
    // fetch(base_url + "houses")
    // .then((resp) => resp.json())
    // .then((data) => setHouse(data))
  }, [dispatch]);

  return (
    <div className='App'>
      <Header/>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/signUp" element={<PublicRoute><LoginPage/></PublicRoute>}  />
      <Route path='/more/:id' element={<AboutHome/>} />
      <Route path='/profile' element={<PrivateRoute><MyProfile/></PrivateRoute>}/>
      <Route  path='/creatAdd' element={<PrivateRoute><CreateAd/></PrivateRoute>}/>
    </Routes>


    </div>
  );
}

export default App;
