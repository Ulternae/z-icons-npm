import React from 'react';

export const MinaChevronLeftSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M14.47 18.53a.75.75 0 0 0 1.06 0V5.47a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0 0 1.06z"})
);

export default MinaChevronLeftSolid;
