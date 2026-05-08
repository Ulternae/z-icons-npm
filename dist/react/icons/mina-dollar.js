import React from 'react';

export const MinaDollar = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M17 5h-5m0 0H9.5a3.5 3.5 0 1 0 0 7H12m0-7V3m0 2v7m0 0h2.5a3.5 3.5 0 1 1 0 7H12m0-7v7m0 0H6m6 0v2"})
);

export default MinaDollar;
