import React from 'react';

type ButtonPropsType = {
  callBack: () => void; // Использую callBack вместо onClick
  name: string; // Название кнопки
};

export const Button: React.FC<ButtonPropsType> = (props) => {
  return (
      <button onClick={props.callBack}>
        {props.name}
      </button>
  );
};