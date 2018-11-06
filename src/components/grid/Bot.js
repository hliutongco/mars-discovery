import React from 'react';

const Bot = ({bot}) => {

  return (
    <div className="bots" style={{"gridColumn": bot.Location.Y, "gridRow": bot.Location.X}}>
      {bot.Id}
    </div>
  )
}

export default Bot;
