import React from 'react';

export const MinaLetterI = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M9 7h3.125m0 0h3.125m-3.125 0v10m3.125 0h-3.125m0 0H9"})
);

export default MinaLetterI;
