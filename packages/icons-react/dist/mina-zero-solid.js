import React from 'react';

export const MinaZeroSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M11.875 7.75A2.375 2.375 0 0 0 9.5 10.125v3.75a2.375 2.375 0 1 0 4.75 0v-3.75a2.375 2.375 0 0 0-2.375-2.375M8 10.125a3.875 3.875 0 0 1 7.75 0v3.75a3.875 3.875 0 0 1-7.75 0z"})
);

export default MinaZeroSolid;
