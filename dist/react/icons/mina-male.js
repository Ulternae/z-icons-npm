import React from 'react';

export const MinaMale = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M14.232 9.747a6 6 0 1 0-8.465 8.506 6 6 0 0 0 8.465-8.506m0 0L20 4m0 0h-4m4 0v4"})
);

export default MinaMale;
