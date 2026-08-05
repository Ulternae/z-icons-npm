import React from 'react';

export function MinaChartNoAxesColumnDecreasing({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M7 21V3m5 18V9m5 12v-5"})
  );
}

export default MinaChartNoAxesColumnDecreasing;
