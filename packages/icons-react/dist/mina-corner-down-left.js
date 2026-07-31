import React from 'react';

export const MinaCornerDownLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M5 13.973h10a4 4 0 0 0 4-4V5M5 13.973l4.78-5.027M5 13.973 9.78 19"})
);

export default MinaCornerDownLeft;
