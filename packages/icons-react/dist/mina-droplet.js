import React from 'react';

export const MinaDroplet = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M11.995 3C14 8 21.34 10.602 18.927 16.397 17.775 19.163 14.992 21 12 21s-5.775-1.837-6.927-4.603C2.661 10.607 10 8 11.995 3"}), React.createElement("path", {"d":"M8 15.5c.333 1 2 2.5 4 2.5"})
);

export default MinaDroplet;
