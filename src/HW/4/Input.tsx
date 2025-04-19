import React from 'react';

type InputPropsType = {
	value: string; // Заменяем any на string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Типизируем функцию onChange
};

export const Input: React.FC<InputPropsType> = ({ value, onChange }) => {
	return <input id={'hw04-input'} type="text" value={value} onChange={onChange} />;
};