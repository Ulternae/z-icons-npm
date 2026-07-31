import React from 'react';

export const BruVenmoV = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M466.498 14.8c17.4 28.7 25.3 58.2 25.3 95.501 0 119-101.9 273.5-184.7 382.1h-188.9l-75.8-451.5 165.4-15.7 40.1 321.3c37.4-60.8 83.6-156.3 83.6-221.4 0-35.6-6.1-59.9-15.7-79.9z"})
);

export default BruVenmoV;
