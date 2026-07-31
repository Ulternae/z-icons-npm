import React from 'react';

export const MinaArrowLongLeftSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M6.53 7.47a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06 0v-3.78H22a.75.75 0 0 0 0-1.5H6.53z"})
);

export default MinaArrowLongLeftSolid;
