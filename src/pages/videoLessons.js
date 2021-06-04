import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/header';
import VideoBlock from '../components/videoBlock';
import VideoBlockInfo from '../components/videoBlockInfo';

import '../scss/videoBlock.scss';

const lessonList = [
  {
    id: 0,
    number: 1,
    link: 'https://www.youtube.com/watch?v=zkD0v6bg_sY&ab_channel=ipozitivipozitiv',
  },
  {
    id: 1,
    number: 2,
    link: 'https://www.youtube.com/watch?v=zkD0v6bg_sY&ab_channel=ipozitivipozitiv',
  },
  {
    id: 2,
    number: 3,
    link: 'https://www.youtube.com/watch?v=zkD0v6bg_sY&ab_channel=ipozitivipozitiv',
  },
  {
    id: 3,
    number: 4,
    link: 'https://www.youtube.com/watch?v=zkD0v6bg_sY&ab_channel=ipozitivipozitiv',
  },
];

const VideoLessons = () => {
  return (
    <div>
      <Router>
        <Header title={'Видеоуроки'} />
        <div className="lessons">
          <Route exact path="/lessons" component={() => <VideoBlock items={lessonList} />} />
          {lessonList.map((data) => (
            <Route
              path={`/lessons/lesson${data.number}`}
              component={() => <VideoBlockInfo data={data} />}
            />
          ))}
        </div>
      </Router>
    </div>
  );
};

export default VideoLessons;
