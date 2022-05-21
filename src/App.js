import logo from './logo.svg';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Home from './Componant/HomePage/Home';
import Header from './Componant/SharePage/Header';
import Footer from './Componant/SharePage/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Footer></Footer>

      <Toaster position="top-right"
        reverseOrder={false} />
    </div>
  );
}

export default App;
