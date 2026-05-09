import React from 'react';

export const MinaChevronDoubleRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M11.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06 0v-4.939l-4.94 4.94a.75.75 0 0 1-1.06 0V5.47a.75.75 0 0 1 1.06 0l4.94 4.939z"})
);

export default MinaChevronDoubleRightSolid;
