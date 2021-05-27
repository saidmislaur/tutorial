import React from 'react';
import Profile from './profile';
import '../scss/tasksInfo.scss';

const comments = [
  ' Отформатируй свой код',
  ' У тебя неверно сохраняется значение в value <input />',
  ' Галочка не устанавливается при выполнении задачи',
];

const TasksInfo = ({ list, status }) => {
  return (
    <div className="tasks">
      <div className="tasks__list tasks__list-task">
        <div className={`tasks__list-img tasks__list-img--${list[0].status}`}>
          <img src={status[list[0].status].img} alt="logo" />
        </div>
        <div className="tasks__info-title">
          <h4>Задание #{list[0].number}</h4>
          <span>Отправлено: {list[0].sentAt}</span> —<span>Статус: </span>
          <span className="tasks__info-title tasks__info-title--status">
            {status[list[0].status].text}
          </span>
        </div>
      </div>
      <div className="tasks__link">
        <h2>Ссылка на pull request:</h2>
        <a href="https://github.com/saidmislaur/tutorial">
          https://github.com/saidmislaur/tutorial
        </a>
      </div>
      <div className="tasks__author-comments">
        <h2>Комментарии автора</h2>
        <ul>
          {comments.map((comment, index) => (
            <li>
              {index + 1}.{comment}
            </li>
          ))}
        </ul>
      </div>
      <div className="tasks__conversation">
        <h2>Обсуждение</h2>
      </div>
    </div>
  );
};

export default TasksInfo;
