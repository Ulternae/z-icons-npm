import React from 'react';

export const MinaInfoSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M12 4.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75M10.75 9.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 .75.75v9.293a.75.75 0 0 1-.25 1.457h-1a.75.75 0 0 1-.25-1.457v-8.586a.75.75 0 0 1-.5-.707"})
);

export default MinaInfoSolid;
