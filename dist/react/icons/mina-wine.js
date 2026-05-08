import React from 'react';

export const MinaWine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M8.4 21h7.2M12 21v-6.75m-.75 0h1.5a5 5 0 0 0 5-5V3.5a.5.5 0 0 0-.5-.5H6.75a.5.5 0 0 0-.5.5v5.75a5 5 0 0 0 5 5"})
);

export default MinaWine;
