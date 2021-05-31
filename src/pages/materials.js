import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/header';
import Content from '../components/content';
import ContentInfo from '../components/contentInfo';

const contentDB = [
  {
    id: 0,
    name: 'React',
    content: [
      {
        id: 0,
        title: 'Что такое компонент ?',
        text: 'dsfsdfsdf',
      },
      {
        id: 1,
        title: 'Что такое хуки ?',
        text: 'dsfsdfsdf',
      },
      {
        id: 2,
        title: ' В чём отличие функционального компонента от классового ?',
        text: 'dsfsdfsdf',
      },
    ],
  },
  {
    id: 1,
    name: 'JavaScript',
    content: [
      {
        id: 0,
        title: 'Что такое замыкание',
        text: 'dsfsdfsdf gerghuh',
      },
      {
        id: 1,
        title: 'Как выполнить запрос на сервер?',
        text: 'ffdhgjhdfjgk',
      },
    ],
  },
];

const Materials = () => {
  return (
    <Router>
      <Header title="Материалы" />
      <div>
        <div className="materials">
          <Route exact path="/materials" component={() => <Content data={contentDB} />} />
          {contentDB.map((items, index) => (
            <div>
              {items.content.map((item) => (
                <Route
                  path={`/materials/${items.name}/${item.id}`}
                  component={() => <ContentInfo data={item} />}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Router>
  );
};

export default Materials;
