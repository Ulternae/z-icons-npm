import React from 'react';

export const MinaFrameSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M7.35 3a.75.75 0 0 0-1.5 0v2.85H3a.75.75 0 0 0 0 1.5h2.85v9.3H3a.75.75 0 0 0 0 1.5h2.85V21a.75.75 0 0 0 1.5 0v-2.85h9.3V21a.75.75 0 0 0 1.5 0v-2.85H21a.75.75 0 0 0 0-1.5h-2.85v-9.3H21a.75.75 0 0 0 0-1.5h-2.85V3a.75.75 0 0 0-1.5 0v2.85h-9.3z"})
);

export default MinaFrameSolid;
