import React from 'react';

export const MinaLetterXSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M8.8 6.4a1 1 0 1 0-1.6 1.2l3.3 4.4-3.3 4.4a1 1 0 0 0 1.6 1.2l2.95-3.933L14.7 17.6a1 1 0 1 0 1.6-1.2L13 12l3.3-4.4a1 1 0 0 0-1.6-1.2l-2.95 3.933z"})
);

export default MinaLetterXSolid;
