import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.scss';
import LoginPage from './pages/LoginPage';
import Activities from './pages/activities';
import Navbar from './components/navbar';
import Materials from './pages/materials';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="section">
          <Route
            path="/login"
            component={() => <LoginPage title={['вход в кабинет', 'Регистрация успешна']} />}
          />
          <Route exact path="/" component={() => <Activities />} />
          <Route exact path="/materials" component={() => <Materials />} />
        </div>
      </div>
    </Router>
  );
}

export default App;

{
  /* <LoginPage title={['вход в кабинет', 'Регистрация успешна']}/> */
}
