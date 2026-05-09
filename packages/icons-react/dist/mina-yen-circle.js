import React from 'react';

export const MinaYenCircle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-5.818.5H12m0 0H8.818m3.182 0-3.5-5m3.5 5 3.5-5m-3.5 5V15m3.182 0H12m0 0H8.818M12 15v2.5"})
);

export default MinaYenCircle;
