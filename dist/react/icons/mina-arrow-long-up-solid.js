import React from 'react';

export const MinaArrowLongUpSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M16.53 6.53a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 0 1.06h3.78V22a.75.75 0 0 0 1.5 0V6.53z"})
);

export default MinaArrowLongUpSolid;
