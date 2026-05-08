import React from 'react';

export const MinaFineTuneSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M9.25 8.5a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1-.75-.75m-7 7a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M5 5.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m14 7a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5"})
);

export default MinaFineTuneSolid;
