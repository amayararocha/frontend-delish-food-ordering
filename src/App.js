import { CssBaseline } from '@mui/material';
import './App.css';
import Navbar from './component/navbar/Navbar.jsx';
import { darkTheme } from './theme/DarkTheme.js';
import { ThemeProvider } from '@mui/material/styles';
import Home from './component/home/Home.jsx';
import RestaurantDetails from './component/restaurant/RestaurantDetails.jsx';
import Cart from './component/cart/Cart.jsx';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
        <Navbar/>
        {/*<Home/>*/}
        {/*<RestaurantDetails/>*/}
        <Cart/>
    </ThemeProvider>
  );
}

export default App;
