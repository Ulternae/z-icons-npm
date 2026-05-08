import React from 'react';

export const MinaMoveSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M11.47 2.47a.75.75 0 0 1 1.06 0l2.7 2.7a.75.75 0 0 1 0 1.06h-2.48v5.02h5.02V8.77a.75.75 0 0 1 1.06 0l2.7 2.7a.75.75 0 0 1 0 1.06l-2.7 2.7a.75.75 0 0 1-1.06 0v-2.48h-5.02v5.02h2.48a.75.75 0 0 1 0 1.06l-2.7 2.7a.75.75 0 0 1-1.06 0l-2.7-2.7a.75.75 0 0 1 0-1.06h2.48v-5.02H6.23v2.48a.75.75 0 0 1-1.06 0l-2.7-2.7a.75.75 0 0 1 0-1.06l2.7-2.7a.75.75 0 0 1 1.06 0v2.48h5.02V6.23H8.77a.75.75 0 0 1 0-1.06z"})
);

export default MinaMoveSolid;
