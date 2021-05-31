import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/header';

const VideoLessons = () => {
  return (
    <div>
      <Router>
        <Header title={'видеоуроки'} />
        <div className="lessons">
          <Route exact path="/lessons" />
        </div>
      </Router>
    </div>
  );
};

export default VideoLessons;
