import React from 'react';

export const LanCircleMoonRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-464a208 208 0 1 0 0 416 208 208 0 1 0 0-416m0 48c12.5 0 25.7 1 37.7 4.6 5 2 8.7 6.6 9.3 12.2.7 6.3-2.5 12.4-8.2 15.2C257 146.9 231 185.9 231 231c0 63.5 51.5 115 115 115 9.2 0 19.5-1.9 24.1 8.4 2.6 5.8 1.3 12.6-3.3 17C338.1 399 299 416 256 416c-88.4 0-160-71.6-160-160S167.6 96 256 96"})
);

export default LanCircleMoonRegular;
