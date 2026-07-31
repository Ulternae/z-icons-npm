import React from 'react';

export const MinaChartNoAxesColumnSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M5 21v-9a1 1 0 1 1 2 0v9a1 1 0 1 1-2 0m6 0V3a1 1 0 1 1 2 0v18a1 1 0 1 1-2 0m6 0V8a1 1 0 1 1 2 0v13a1 1 0 1 1-2 0"})
);

export default MinaChartNoAxesColumnSolid;
