import React from 'react';
import '../scss/button.scss';
import AddIcon from '@material-ui/icons/Add';

const Button = ({ text }) => {
  return (
    <div className="button">
      <button>
        <AddIcon /> {text}
      </button>
    </div>
  );
};

export default Button;
