import React from 'react';

export function MinaChartNoAxesGantt({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M5 14h11m-7-4h11M7 18h11M6 6h11"})
  );
}

export default MinaChartNoAxesGantt;
