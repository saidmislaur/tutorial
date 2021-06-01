import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/videoBlock.scss';

import '../scss/videoBlock.scss';

const VideoBlock = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <Link to={`/lessons/lesson${item.number}`}>
          <div className="lessons__videoBlock">
            <h2>Урок №{item.number}</h2>
            <iframe
              width="504px;"
              height="282px"
              src={item.link}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VideoBlock;
