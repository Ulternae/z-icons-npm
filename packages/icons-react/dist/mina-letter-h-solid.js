import React from 'react';

export const MinaLetterHSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M9 6a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0v-4h4.25v4a1 1 0 1 0 2 0V7a1 1 0 1 0-2 0v4H10V7a1 1 0 0 0-1-1"})
);

export default MinaLetterHSolid;
