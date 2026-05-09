import React from 'react';

export const MinaRowsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M4 4.75A1.75 1.75 0 0 0 2.25 6.5v3c0 .966.784 1.75 1.75 1.75h16a1.75 1.75 0 0 0 1.75-1.75v-3A1.75 1.75 0 0 0 20 4.75zm0 8a1.75 1.75 0 0 0-1.75 1.75v3c0 .966.784 1.75 1.75 1.75h16a1.75 1.75 0 0 0 1.75-1.75v-3A1.75 1.75 0 0 0 20 12.75z"})
);

export default MinaRowsSolid;
