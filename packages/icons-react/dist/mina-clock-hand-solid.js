import React from 'react';

export const MinaClockHandSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M12.147 2.25a.75.75 0 0 1 .75.75v8.537l5.585 2.792a.75.75 0 1 1-.67 1.342l-6-3a.75.75 0 0 1-.415-.671V3a.75.75 0 0 1 .75-.75"})
);

export default MinaClockHandSolid;
