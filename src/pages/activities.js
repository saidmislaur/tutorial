import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Completed from '../components/completed';
import Header from '../components/header';
import Tasks from '../components/tasks';
import TasksInfo from '../components/tasksInfo';

import Check from '../assets/img/check.svg';
import Rejected from '../assets/img/rejected.svg';
import Pending from '../assets/img/pending.svg';

import '../scss/activities.scss';

const list = [
  {
    id: 0,
    number: '1',
    status: 'approved',
    sentAt: '24.10.2020',
    approvedAt: '25.10.2020',
  },
  {
    id: 1,
    number: '2',
    status: 'pending',
    sentAt: '24.10.2020',
    approvedAt: '25.10.2020',
  },
  {
    id: 2,
    number: '2',
    status: 'rejected',
    sentAt: '24.10.2020',
    approvedAt: '25.10.2020',
  },
  {
    id: 3,
    number: '3',
    status: 'rejected',
    sentAt: '24.10.2020',
    approvedAt: '25.10.2020',
  },
];

const status = {
  approved: {
    text: 'Выполнено',
    img: Check,
  },
  rejected: {
    text: 'Отклонено',
    img: Rejected,
  },
  pending: {
    text: 'Ожидается проверка',
    img: Pending,
  },
};

function Activities() {
  return (
    <Router>
      <div>
        <Header title="Активность" />
        <div className="content">
          <Route exact path="/" component={() => <Tasks list={list} status={status} />} />
          <Route exact path="/" component={() => <Completed />} />
          {list.map((list, index) => (
            <Route
              path={`/task/${index}`}
              component={() => <TasksInfo list={list} status={status} />}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default Activities;
