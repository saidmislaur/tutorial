import React from 'react';
import GlobalButton from './button';

import '../scss/tasks.scss';

const Tasks = ({ list, status }) => {
  return (
    <div className="tasks">
      <h3>Задания</h3>
      {list.map((item) => (
        <div>
          <div className="tasks__list">
            <div className={`tasks__list-img tasks__list-img--${item.status}`}>
              <img src={status[item.status].img} alt="logo" />
            </div>
            <div className="tasks__info">
              <h4>
                Задание #{item.number} - {status[item.status].text}
              </h4>
              <span>
                Отправлено: {item.sentAt} — Одобрено: {item.approvedAt}
              </span>
            </div>
          </div>
        </div>
      ))}
      <GlobalButton />
    </div>
  );
};

export default Tasks;
