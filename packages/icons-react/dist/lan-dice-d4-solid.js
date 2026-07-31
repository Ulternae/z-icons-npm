import React from 'react';

export const LanDiceD4Solid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -4.225 576 535.45',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M251.1 13.4c19.2-23.5 55.1-23.5 74.3 0L545 281.9c17.1 20.9 13.6 51.8-7.7 68.3L317.7 521.1c-17.3 13.5-41.6 13.5-58.9 0L39 350.2c-21.3-16.6-24.8-47.4-7.7-68.3zM288.2 92c-11 0-20 9-20 20v320c0 11 9 20 20 20s20-9 20-20V112c0-11-9-20-20-20"})
);

export default LanDiceD4Solid;
