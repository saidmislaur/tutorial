import React from 'react';
import Profile from './profile';
import Button from './button';
import '../scss/tasksInfo.scss';

const comments = [
  ' Отформатируй свой код',
  ' У тебя неверно сохраняется значение в value <input />',
  ' Галочка не устанавливается при выполнении задачи',
];

const TasksInfo = ({ list, status }) => {
  return (
    <div className="tasks tasks--tasks-info">
      <div className="tasks__list tasks__list-task">
        <div className={`tasks__list-img tasks__list-img--${list[0].status}`}>
          <img src={status[list[0].status].img} alt="logo" />
        </div>
        <div className="tasks__info-title">
          <h4>Задание #2</h4>
          <span>Отправлено: {list[0].sentAt}</span> —<span>Статус: </span>
          <span className="tasks__info-title tasks__info-title--status">
            {status[list[list.id].status].text}
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
        <Profile
          classnames="header__profile-info--userNameTasks"
          userName="Арчаков Дэннис"
          userStatus="Отправлено 24.10.2020, в 14:52"
        />
        <div className="tasks__conversation-comment">
          <p>
            на примерах показывается разница. ща смотрю и действительно понимаю где плохо и хорошо
          </p>
        </div>
        <Profile
          classnames="header__profile-info--userNameTasks"
          userName="Jimmy Hudson"
          userStatus="Отправлено 24.10.2021, в 15:37"
        />
        <div className="tasks__conversation-comment">
          <p>
            на примерах показывается разница. ща смотрю и действительно понимаю где плохо и хорошо
          </p>
        </div>
        <div className="tasks__addComment">
          <textarea placeholder="Комментарий"></textarea>
        </div>
        <Button text="Отправить" />
      </div>
    </div>
  );
};

export default TasksInfo;
