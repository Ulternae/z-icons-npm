import React from 'react';

export const MinaChartNoAxesColumnDecreasingSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M6 21V3a1 1 0 0 1 2 0v18a1 1 0 1 1-2 0m5 0V9a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0m5 0v-5a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0"})
);

export default MinaChartNoAxesColumnDecreasingSolid;
