import React from 'react';

export const LanDiceD4Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -4.225 576 535.35',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M251 13.4c19.2-23.5 55.1-23.5 74.3 0L545 281.9c17.1 20.9 13.6 51.8-7.7 68.3L317.6 521.1l-3.3 2.3c-15.9 10.3-36.4 10.3-52.3 0l-3.3-2.3L39 350.2c-20-15.5-24.3-43.6-10.7-64.3l3-4zM68.5 312.3l195.7 152.2V73.1zm243.7 152.2 195.7-152.2L312.2 73.1z"})
);

export default LanDiceD4Regular;
