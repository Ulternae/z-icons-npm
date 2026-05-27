import React from 'react';

export const NeoPaletteSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M280 0C197 0 126.4 26.5 76.5 76.5S0 197 0 280s26.5 153.6 76.5 203.5S197 560 280 560c46.4 0 84-37.6 84-84v-56c0-19.6 6.1-33 14.5-41.5S400.4 364 420 364h56c46.4 0 84-37.6 84-84 0-83-26.5-153.6-76.5-203.5S363 0 280 0M112 266a42 42 0 1 1 84 0 42 42 0 1 1-84 0m98 98a42 42 0 1 1 0 84 42 42 0 1 1 0-84m14-210a42 42 0 1 1 84 0 42 42 0 1 1-84 0m182 14a42 42 0 1 1 0 84 42 42 0 1 1 0-84"})
);

export default NeoPaletteSolid;
