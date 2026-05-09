import React from 'react';

export const MinaArrowUpLeftSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M15.5 5.75a.75.75 0 0 1 .75.75l-4.345 4.345 6.125 6.125a.75.75 0 1 1-1.06 1.06l-6.125-6.125L6.5 16.25a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75z"})
);

export default MinaArrowUpLeftSolid;
