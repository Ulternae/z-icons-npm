import React from 'react';

export const MinaFlagOneSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M5.5 3A.75.75 0 0 0 4 3v18a.75.75 0 0 0 1.5 0v-6.438l13.241-3.883c1.679-.492 1.679-2.866 0-3.358L5.5 3.438z"})
);

export default MinaFlagOneSolid;
