import React from 'react';
import '../scss/button.scss';
import AddIcon from '@material-ui/icons/Add';

const Button = () => {
  return (
    <div className="button">
      <button>
        <AddIcon /> Отправить задание
      </button>
    </div>
  );
};

export default Button;
