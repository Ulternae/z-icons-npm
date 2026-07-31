import React from 'react';

export const MinaElevator = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M12 8.294h4.5a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H12m0-12.706H7.5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2H12m0-12.706V21M7.125 4.588 8.75 3l1.625 1.588M13.625 3l1.625 1.588L16.875 3"})
);

export default MinaElevator;
