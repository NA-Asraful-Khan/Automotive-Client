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
import Dashboard from './Componant/Page/Dashboard';
import AddReview from './Componant/Page/DashBoard/AddReview';
import MyOrders from './Componant/Page/DashBoard/MyOrders';
import MyProfile from './Componant/Page/DashBoard/MyProfile';
import ManageAllOrders from './Componant/Page/DashBoard/ManageAllOrders';
import AddAProduct from './Componant/Page/DashBoard/AddAProduct';
import MakeAdmin from './Componant/Page/DashBoard/MakeAdmin';
import ManageProducts from './Componant/Page/DashBoard/ManageProducts';
import Purchase from './Componant/Page/Purchase';
import Profileform from './Componant/Page/DashBoard/Profileform';
import Payment from './Componant/Page/DashBoard/Payment';


function App() {
  return (
    <div data-theme="light" className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path='/Tools' element={<Tools></Tools>}></Route>
        <Route path='/Tools/:id' element={
          <RequiredAuth>
            <Purchase></Purchase>
          </RequiredAuth>
        }></Route>
        <Route path='/Portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/DashBoard' element={
          <RequiredAuth>
            <Dashboard></Dashboard>
          </RequiredAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='MyOrders' element={<MyOrders></MyOrders>}></Route>
          <Route path='AddReview' element={<AddReview></AddReview>}></Route>
          <Route path='MyProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='ManageOrder' element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path='AddProduct' element={<AddAProduct></AddAProduct>}></Route>
          <Route path='MakeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='ManageProducts' element={<ManageProducts></ManageProducts>}></Route>
          <Route path='Payment/:id' element={<Payment></Payment>}></Route>

        </Route>

        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Signup' element={<SignUp></SignUp>}></Route>
        <Route path='/profileform' element={<Profileform></Profileform>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

      <Toaster position="top-right"
        reverseOrder={false} />
    </div>
  );
}

export default App;
