import React from 'react';

export const MinaArrowUpRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M8.5 5.75a.75.75 0 0 0-.75.75l4.345 4.345L5.97 16.97a.75.75 0 1 0 1.06 1.06l6.125-6.125L17.5 16.25a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75z"})
);

export default MinaArrowUpRightSolid;
