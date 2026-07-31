import React from 'react';

export const MinaTwo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M8.75 9.92c0-3.894 5.77-3.894 5.77 0 0 2.94-3.77 5.476-5.77 7.08 0 0 3.75-.625 6.25 0"})
);

export default MinaTwo;
