import { Route, Routes } from 'react-router-dom';
import Layout from './components/hoc/Layout';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='main' element={<MainPage />} />
          <Route path='about' element={<AboutPage />} />
        </Route>
        <Route index element={<LoginPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
