import React from 'react';

export const MinaMoveHorizontalSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M5.47 7.47a.75.75 0 0 1 1.06 0v3.78h10.94V7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0v-3.78H6.53v3.78a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06z"})
);

export default MinaMoveHorizontalSolid;
