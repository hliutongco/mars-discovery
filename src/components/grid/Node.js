import React from 'react';

const Node = ({node}) => {
  return (
    <div className="nodes" style={{"gridColumn": node.Location.Y, "gridRow": node.Location.X}}>
      Value: {node.Value}
    </div>
  )
}

export default Node;
