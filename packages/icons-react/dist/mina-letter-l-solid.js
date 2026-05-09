import React from 'react';

export const MinaLetterLSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M9 6a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2h-6V7a1 1 0 0 0-1-1"})
);

export default MinaLetterLSolid;
