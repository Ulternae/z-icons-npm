import React from 'react';

export const MinaCornerDownRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M19 13.973H9a4 4 0 0 1-4-4V5m14 8.973-4.78-5.027M19 13.973 14.22 19"})
);

export default MinaCornerDownRight;
