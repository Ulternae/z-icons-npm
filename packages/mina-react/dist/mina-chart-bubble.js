import React from 'react';

export function MinaChartBubble({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6V3m18 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"}), React.createElement("path", {"d":"M13 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m3 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"})
  );
}

export default MinaChartBubble;
