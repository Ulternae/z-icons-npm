import React from 'react';

export const MinaDivideSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M2.25 12a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75M12 4.25a.75.75 0 0 1 .75.75v.744a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75m0 13.256a.75.75 0 0 1 .75.75V19a.75.75 0 0 1-1.5 0v-.744a.75.75 0 0 1 .75-.75"})
);

export default MinaDivideSolid;
