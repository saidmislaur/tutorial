import React from 'react';

import '../scss/contentInfo.scss';

const ContentInfo = ({ data }) => {
  console.log(data);
  return (
    <div className="contentInfo">
      <div>
        <div className="contentInfo__title">
          <h2>{data.title}</h2>
        </div>
        <div className="contentInfo__list">
          <h3>{data.text}</h3>
          <p>{data.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentInfo;
