import React from 'react';

export const MinaArrowDiagonalTwo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"m11.293 4.929 7.778 7.778m0 0h-4.95m4.95 0v-4.95m-6.364 11.314L4.93 11.293m0 0v4.95m0-4.95h4.95"})
);

export default MinaArrowDiagonalTwo;
