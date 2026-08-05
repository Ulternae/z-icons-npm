import React from 'react';

export function MinaChartNoAxesColumnIncreasing({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M17 21V3m-5 18V9M7 21v-5"})
  );
}

export default MinaChartNoAxesColumnIncreasing;
