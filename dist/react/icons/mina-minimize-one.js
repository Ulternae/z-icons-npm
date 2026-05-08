import React from 'react';

export const MinaMinimizeOne = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M20 10h-6V4M4 14h6v6M20 4l-6 6m-4 4-6 6"})
);

export default MinaMinimizeOne;
