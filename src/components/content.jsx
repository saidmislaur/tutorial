import React from 'react';
import ContentSvg from '../assets/img/needle.svg';
import '../scss/materialsContent.scss';

const Content = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="materialsContent">
        <div className="materialsContent__title">
          <h1>{data.name}</h1>
        </div>
        <div className="materialsContent__list">
          <ul>
            {data.content.map((item) => (
              <li>
                {item.title}
                <img src={ContentSvg} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
