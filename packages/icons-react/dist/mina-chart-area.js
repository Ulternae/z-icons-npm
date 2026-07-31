import React from 'react';

export const MinaChartArea = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M21 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6V3"}), React.createElement("path", {"d":"m11.89 11.796-4.134-4.77C7.149 6.326 6 6.755 6 7.68V16a2 2 0 0 0 2 2h9.348a2 2 0 0 0 1.81-2.852l-2.135-4.537a1 1 0 0 0-1.505-.374l-2.273 1.704a1 1 0 0 1-1.355-.145"})
);

export default MinaChartArea;
