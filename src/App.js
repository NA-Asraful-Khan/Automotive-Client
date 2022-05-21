import './App.css';
import { Toaster } from 'react-hot-toast';
import Header from './Componant/SharePage/Header';
import Footer from './Componant/SharePage/Footer';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Componant/SharePage/NotFound';
import MyPortfolio from './Componant/Page/MyPortfolio';
import SignUp from './Componant/Registration/SignUp';
import Login from './Componant/Registration/Login';
import RequiredAuth from './Componant/SharePage/RequiredAuth';
import Home from './Componant/Page/Home';
import Tools from './Componant/Page/Tools';
import Blogs from './Componant/Page/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path='/Tools' element={<Tools></Tools>}></Route>
        <Route path='/Blog' element={<Blogs></Blogs>}></Route>
        <Route path='/Portfolio' element={
          <RequiredAuth>
            <MyPortfolio></MyPortfolio>
          </RequiredAuth>
        }></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Signup' element={<SignUp></SignUp>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

      <Toaster position="top-right"
        reverseOrder={false} />
    </div>
  );
}

export default App;
