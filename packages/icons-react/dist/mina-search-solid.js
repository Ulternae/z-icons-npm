import React from 'react';

export const MinaSearchSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M11.5 3.25a8.25 8.25 0 1 0 5.265 14.602l2.678 2.678a.75.75 0 0 0 1.06-1.06l-2.675-2.676A8.25 8.25 0 0 0 11.5 3.25"})
);

export default MinaSearchSolid;
