import React, { useState } from 'react';
import Button from './button';
import '../scss/videoBlock.scss';

const VideoBlockInfo = ({ data }) => {
  const [reques, setReques] = useState(false);

  const visiable = () => {
    setReques(!reques);
    alert('asd');
  };

  console.log(data);
  return (
    <div>
      <div className="lessons__videoBlock lessons__videoBlock--info">
        <h2>уроки №{data.number}</h2>
        <iframe
          width="717px"
          height="402px"
          src={data.link}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
        <div className="lessons__videoBlock--info__text">
          <p>
            Хуки — нововведение в React 16.8, которое позволяет использовать состояние и другие
            возможности React без написания классов.{' '}
          </p>

          <p style={{ marginTop: 30 }}>
            Первый хук, который мы изучим, это функция useState. Не беспокойтесь, если этот пример
            будет поначалу неясен. Скоро мы разберёмся, как он работает.
          </p>
        </div>
        <div className="lessons__videoBlock--info__task">
          <h2>Задание</h2>
          <p>
            Напишите функцию (название для функции придумайте сами. ЛЮБОЕ), которая будет получать 2
            переменные: name и old. Функция будет выдавать приветственное окно с помощью alert. То
            есть, выводится окно с каким-нибудь текстом, где будут вбиты значения из name и old. */
          </p>
        </div>
        {reques && (
          <div className="lessons__videoBlock--info__reques">
            <div className="lessons__videoBlock--info__reques-head">
              <h3>Запросить проверку задания №{data.number}</h3>
              <textarea placeholder="Комментарий"></textarea>
            </div>
            <div className="lessons__videoBlock--info__reques-buttons">
              <Button text="Отмена" />
              <Button text="Отправить" />
            </div>
          </div>
        )}
        <Button visiable={() => visiable()} text="Запросить проверку" />
      </div>
    </div>
  );
};

export default VideoBlockInfo;
