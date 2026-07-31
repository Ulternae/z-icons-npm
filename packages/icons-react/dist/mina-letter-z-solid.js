import React from 'react';

export const MinaLetterZSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M8 6a1 1 0 1 0 0 2h5.5l-6.3 8.4A1 1 0 0 0 8 18h7.5a1 1 0 1 0 0-2H10l6.3-8.4a1 1 0 0 0-.8-1.6z"})
);

export default MinaLetterZSolid;
