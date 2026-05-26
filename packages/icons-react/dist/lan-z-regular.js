import React from 'react';

export const LanZRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 56c0-13.3 10.7-24 24-24h336c9.3 0 17.8 5.4 21.8 13.9s2.6 18.4-3.4 25.6L75.5 432H360c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-9.3 0-17.8-5.4-21.8-13.9s-2.6-18.4 3.4-25.6L308.5 80H24C10.7 80 0 69.3 0 56"})
);

export default LanZRegular;
