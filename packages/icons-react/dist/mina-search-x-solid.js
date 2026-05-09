import React from 'react';

export const MinaSearchXSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M3.25 11.5a8.25 8.25 0 1 1 14.578 5.294l2.675 2.676a.75.75 0 0 1-1.06 1.06l-2.678-2.678A8.25 8.25 0 0 1 3.25 11.5m7.53-1.78a.75.75 0 0 0-1.06 1.06l.97.97-.97.97a.75.75 0 1 0 1.06 1.06l.97-.97.97.97a.75.75 0 1 0 1.06-1.06l-.97-.97.97-.97a.75.75 0 1 0-1.06-1.06l-.97.97z"})
);

export default MinaSearchXSolid;
