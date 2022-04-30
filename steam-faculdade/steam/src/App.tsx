import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/cart-checkout' element={<Cart />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
