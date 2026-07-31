import React from 'react';

export const MinaMoveVerticalSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M16.53 5.47a.75.75 0 0 1 0 1.06h-3.78v10.94h3.78a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06h3.78V6.53H7.47a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0z"})
);

export default MinaMoveVerticalSolid;
