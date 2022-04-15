import './App.css';
import Header from './components/CommonPages/Header/Header';
import Banner from './components/CommonPages/Banner/Banner';
import Home from './components/Home/Home';
import Footer from './components/CommonPages/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './components/SharedPage/Login/Login';
import SignUp from './components/SharedPage/SignUp/SignUp';
import DetailsPage from './components/DetailsPage/DetailsPage';
import DefaultPages from './components/DefaultPages/DefaultPages';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Banner></Banner>
      <Routes>
        <Route path='/' element={ 
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
         }></Route>
        <Route path='/home' element={ 
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
         }></Route>
        <Route path='/login' element={ <Login></Login> }></Route>
        <Route path='/signup' element={ <SignUp></SignUp> }></Route>
        <Route path='/product/:productId' element={ 
          <RequireAuth>
            <DetailsPage></DetailsPage>
          </RequireAuth>
         }></Route>
        <Route path='*' element={ <DefaultPages></DefaultPages> }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
