// src/ButtonPanel.js
import React from 'react';
import Button from '@mui/material/Button';

function ButtonPanel({ onClick }) {
  return (
    <div>
      <Button onClick={() => onClick(1)}>Button 1</Button>
      <Button onClick={() => onClick(2)}>Button 2</Button>
      <Button onClick={() => onClick(3)}>Button 3</Button>
      <Button onClick={() => onClick(4)}>Button 4</Button>
    </div>
  );
}

export default ButtonPanel;
