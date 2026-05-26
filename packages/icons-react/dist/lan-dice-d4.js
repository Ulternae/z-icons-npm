import React from 'react';

export const LanDiceD4 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M251 13.4c19.2-23.5 55.1-23.5 74.3 0L545 281.9c17.1 20.9 13.6 51.8-7.7 68.3L317.6 521.1l-3.3 2.3c-15.9 10.3-36.4 10.3-52.3 0l-3.3-2.3L39 350.2c-20-15.5-24.3-43.6-10.7-64.3l3-4zM56.1 302.2c-5.7 7-4.5 17.2 2.6 22.7L272.2 491V38zM304.2 491l213.5-166.1 2.4-2.3c4.2-4.9 5-12 2-17.7l-1.8-2.7L304.2 38.1z"})
);

export default LanDiceD4;
