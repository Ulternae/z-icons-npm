import React from 'react';

export const MinaLetterTSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M8 6a1 1 0 0 0 0 2h2.75v9a1 1 0 1 0 2 0V8h2.75a1 1 0 1 0 0-2z"})
);

export default MinaLetterTSolid;
