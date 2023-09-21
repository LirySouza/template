import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './Dashboard';
import CadastroUsuario from "./pages/CadastroUsuario";
import ErroPage from './pages/ErroPage';
import App from './pages/App';
import CadastroProduto from './pages/CadastroProduto';
import "./App.css";
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5d42ad',
      light: '#6B5DE3',
      dark: '#6090FD',
    },
    secondary: {
      main: '#c33c6c',
      light: '#191A3B',
      dark: '#191A3B',
    },
    background: {
      default: '#e0eaec',
    },
    error: {
      main: '#b90b0b',
      light: '#f10808',
      dark: '#cb0f0f',
    },
    info: {
      main: '#1d6590',
      light: '#4ea0c7',
      dark: '#2a2ad4',
    },
    success: {
      main: '#236927',
      light: '#37ce44',
    },
    text: {
      primary: '#716c6c',
      secondary: 'rgba(0,0,0,0.7)',
    },
  },
  typography: {
    fontFamily: 'Droid Sans',
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErroPage />
  },
  {
    path: "/cadastro",
    element: <CadastroUsuario />,
    errorElement: <ErroPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children:[
      {
        path: "produtos",
        element: <App />
      },
      {
        path: "cadastro/produto",
        element: <CadastroProduto />
      },
      {
        path: "editar/produto/:id",
        element: <CadastroProduto />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);
