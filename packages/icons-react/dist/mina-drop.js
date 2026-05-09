import React from 'react';

export const MinaDrop = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M11.995 3c3.58 3.56 9.345 7.602 6.932 13.397C17.775 19.163 14.992 21 12 21s-5.775-1.837-6.927-4.603C2.661 10.607 8.419 6.561 11.995 3"})
);

export default MinaDrop;
