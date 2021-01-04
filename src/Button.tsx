import React from 'react';
import './Button.css';

interface Props {
    label: string;
    onClick: () => void;
};

function Button({label, onClick}: Props) {
  return (
    <div className="Button-Wrapper">
        <button className="Button" onClick={onClick}>
            <span>{label}</span>
        </button>
    </div>
  );
}

export default Button;
