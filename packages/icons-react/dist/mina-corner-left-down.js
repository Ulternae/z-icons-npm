import React from 'react';

export const MinaCornerLeftDown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M10.027 19V9a4 4 0 0 1 4-4H19m-8.973 14 5.028-4.78M10.027 19 5 14.22"})
);

export default MinaCornerLeftDown;
