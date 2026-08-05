import React from 'react';

export function MinaChartPie({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12 21a9 9 0 0 0 9-9h-9V3a9 9 0 0 0 0 18"})
  );
}

export default MinaChartPie;
