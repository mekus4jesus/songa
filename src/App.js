import { Box } from '@chakra-ui/react';
import './App.css';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { Home } from './pages/homepage/home';
import { ShopContextProvider } from './usecontext/usecontext';
import { StoreLocator } from './pages/locator/store-locator';
import { Sell } from './pages/sell/sell';
import { Carts } from './pages/cart/cart';
import { SignUpForm } from './component/signup';
import { Navbar } from './component/navbar';
import { Footer } from './component/footer';

function App() {
  return (
    <Box>
      <ShopContextProvider>
        <Router>
          <AppContent />
        </Router>
      </ShopContextProvider>
    </Box>
  );
}

function AppContent() {
  // useLocation hook can be safely used here
  const location = useLocation();

  // Check if the current location is the SignUpForm route
  const isSignUpPage = location.pathname === '/signup';

  return (
    <>
      {/* Render the Navbar only if it's not the SignUpForm route */}
      {!isSignUpPage && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store-locator' element={<StoreLocator />} />
        <Route path='/sell-product' element={<Sell />} />
        <Route path='/cart' element={<Carts />} />
        <Route path='/signup' element={<SignUpForm />} />
      </Routes>
      {!isSignUpPage && <Footer/>}
    </>
  );
}

export default App;
