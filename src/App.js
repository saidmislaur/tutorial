import './index.css';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <LoginPage title={['вход в кабинет', 'Регистрация успешна']} />
    </div>
  );
}

export default App;
