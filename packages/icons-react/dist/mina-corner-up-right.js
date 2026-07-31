import React from 'react';

export const MinaCornerUpRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M19 10.027H9a4 4 0 0 0-4 4V19m14-8.973-4.78 5.028M19 10.027 14.22 5"})
);

export default MinaCornerUpRight;
