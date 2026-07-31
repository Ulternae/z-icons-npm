import React from 'react';

export const MinaFatCornerUpLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M21 19.923q-3.303-4.216-5.866-4.785-2.564-.569-4.88-.172V20L3 11.786 10.253 4v4.784Q14.54 8.82 17.54 12T21 19.923"})
);

export default MinaFatCornerUpLeft;
