import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.scss';
import LoginPage from './pages/LoginPage';
import Activities from './pages/activities';
import Navbar from './components/navbar';

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
        </div>
      </div>
    </Router>
  );
}

export default App;

{
  /* <LoginPage title={['вход в кабинет', 'Регистрация успешна']}/> */
}
