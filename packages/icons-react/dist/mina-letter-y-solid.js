import React from 'react';

export const MinaLetterYSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M8.8 6.4a1 1 0 1 0-1.6 1.2l3.55 4.733V17a1 1 0 1 0 2 0v-4.667L16.3 7.6a1 1 0 0 0-1.6-1.2l-2.95 3.933z"})
);

export default MinaLetterYSolid;
