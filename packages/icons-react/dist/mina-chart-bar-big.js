import React from 'react';

export const MinaChartBarBig = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M21 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6V3"}), React.createElement("path", {"d":"M17.5 13h-9A1.5 1.5 0 0 0 7 14.5v1A1.5 1.5 0 0 0 8.5 17h9a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5m-4-7h-5A1.5 1.5 0 0 0 7 7.5v1A1.5 1.5 0 0 0 8.5 10h5A1.5 1.5 0 0 0 15 8.5v-1A1.5 1.5 0 0 0 13.5 6"})
);

export default MinaChartBarBig;
