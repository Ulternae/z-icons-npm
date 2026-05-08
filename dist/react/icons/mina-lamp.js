import React from 'react';

export const MinaLamp = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M12 21v-9m0 9H9m3 0h3m-3-9h6l-2.513-7.702A2 2 0 0 0 13.614 3h-3.228a2 2 0 0 0-1.873 1.298L6 12z"})
);

export default MinaLamp;
