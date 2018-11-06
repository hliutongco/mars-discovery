import React from 'react';
import Cell from './Cell';

const renderCells = () => {
  const cells = []

  for(let i = 0; i < 400; i++){
    cells.push(<Cell key={i}/>)
  }
  console.log(cells.length);
  return cells
}

const Grid = (props) => {
  return (
    <div id="grid-container">
      {renderCells()}
    </div>
  )
}

export default Grid;
