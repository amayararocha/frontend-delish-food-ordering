import { CssBaseline } from '@mui/material';
import './App.css';
import Navbar from './component/navbar/Navbar.jsx';
import { darkTheme } from './theme/DarkTheme.js';
import { ThemeProvider } from '@mui/material/styles';
import Home from './component/home/Home.jsx';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
        <Navbar/>
        <Home/>
    </ThemeProvider>
  );
}

export default App;
