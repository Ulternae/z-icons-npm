import React from 'react';

export const MinaBuilding = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M14.7 2c1.68 0 2.52 0 3.162.34a3.06 3.06 0 0 1 1.311 1.359c.327.665.327 1.536.327 3.279v10.044c0 1.743 0 2.614-.327 3.28a3.06 3.06 0 0 1-1.311 1.359C17.22 22 16.38 22 14.7 22H9.3c-1.68 0-2.52 0-3.162-.34a3.06 3.06 0 0 1-1.311-1.359c-.327-.665-.327-1.536-.327-3.279V6.978c0-1.743 0-2.614.327-3.28A3.06 3.06 0 0 1 6.138 2.34C6.78 2 7.62 2 9.3 2z"}), React.createElement("path", {"d":"M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21M10 6H8m2 4H8m8-4h-2m2 4h-2"})
);

export default MinaBuilding;
