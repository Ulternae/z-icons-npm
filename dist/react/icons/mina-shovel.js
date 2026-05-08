import React from 'react';

export const MinaShovel = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M8.512 3.5 3.5 8.482m2.506-2.491 9.035 8.946m1.229-3.197h-.001a.99.99 0 0 1 1.375 0c6.324 6.261 1.148 12.687-5.831 5.774a.967.967 0 0 1 0-1.36l2.228-2.207z"})
);

export default MinaShovel;
