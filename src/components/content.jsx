import React from 'react';
import { Link } from 'react-router-dom';
import ContentSvg from '../assets/img/needle.svg';
import '../scss/materialsContent.scss';

const Content = ({ data }) => {
  return (
    <div className="materials-block">
      {data.map((items) => (
        <div className="materialsContent">
          <div className="materialsContent__title">
            <h1>{items.name}</h1>
          </div>
          <div className="materialsContent__list">
            <ul>
              {items.content.map((item, index) => (
                <Link key={index} to={`/materials/${items.name}/${item.id}`}>
                  <li>
                    {item.title}
                    <img src={ContentSvg} alt="" />
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
