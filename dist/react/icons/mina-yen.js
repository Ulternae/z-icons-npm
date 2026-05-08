import React from 'react';

export const MinaYen = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M17.455 12H12m0 0H6.545M12 12 6 3.5m6 8.5 6-8.5M12 12v4.25m5.454 0H12m0 0H6.545m5.455 0v4.25"})
);

export default MinaYen;
