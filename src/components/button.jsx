import React from 'react';
import '../scss/button.scss';
import AddIcon from '@material-ui/icons/Add';

const Button = ({ text, visiable }) => {
  return (
    <div className="button">
      <button>
        <AddIcon onClick={visiable} /> {text}
      </button>
    </div>
  );
};

export default Button;
