import React from 'react';

export function MinaChartColumnStacked({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6V3"}), React.createElement("path", {"d":"M7.5 9.25V7A1.5 1.5 0 0 1 9 5.5h1A1.5 1.5 0 0 1 11.5 7v2.25m-4 0h4m-4 0V16A1.5 1.5 0 0 0 9 17.5h1a1.5 1.5 0 0 0 1.5-1.5V9.25m3 4.25V16a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-2.5m-4 0V11A1.5 1.5 0 0 1 16 9.5h1a1.5 1.5 0 0 1 1.5 1.5v2.5m-4 0h4"})
  );
}

export default MinaChartColumnStacked;
