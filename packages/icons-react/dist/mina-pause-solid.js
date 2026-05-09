import React from 'react';

export const MinaPauseSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M8 5.75A1.75 1.75 0 0 0 6.25 7.5v10c0 .966.784 1.75 1.75 1.75h1a1.75 1.75 0 0 0 1.75-1.75v-10A1.75 1.75 0 0 0 9 5.75zm6.5 0a1.75 1.75 0 0 0-1.75 1.75v10c0 .966.784 1.75 1.75 1.75h1a1.75 1.75 0 0 0 1.75-1.75v-10a1.75 1.75 0 0 0-1.75-1.75z"})
);

export default MinaPauseSolid;
