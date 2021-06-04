import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.scss';
import LoginPage from './pages/LoginPage';
import Activities from './pages/activities';
import Navbar from './components/navbar';
import Materials from './pages/materials';
import VideoLessons from './pages/videoLessons';
import Admin from './pages/admin/index';

function App() {
  const [state, setstate] = useState(false);
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <div className="section">
          <Route
            path="/login"
            component={() => <LoginPage title={['вход в кабинет', 'Регистрация успешна']} />}
          />
          <Route exact path="/" component={() => <Activities />} />
          <Route path="/materials" component={() => <Materials />} />
          <Route path="/lessons" component={() => <VideoLessons />} />
        </div>
      </div>
      <Route path="/admin" component={() => <Admin />} />
    </Router>
  );
}

export default App;

{
  /* <LoginPage title={['вход в кабинет', 'Регистрация успешна']}/> */
}
