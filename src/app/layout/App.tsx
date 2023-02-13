import './styles.css'
import NavBar from './NavBar';
import { Container } from 'semantic-ui-react';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../features/HomePage';

function App() {
  const location = useLocation();

  return (
    <>
    <NavBar/>
    <Container style={{marginTop: '7em'}}>
      {location.pathname !== '/resume' ? <HomePage /> : (
        <Outlet />
      )}
    </Container>
    </>
  );
}

export default App;
