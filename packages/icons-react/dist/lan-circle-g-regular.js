import React from 'react';

export const LanCircleGRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-256c0-39.8 32.2-72 72-72 18.5 0 35.2 6.9 48 18.3 9.9 8.8 25 8 33.9-1.9s8-25-1.9-33.9c-21.2-19-49.3-30.6-80-30.6-66.3 0-120 53.7-120 120s53.7 120 120 120c62.9 0 114.5-48.4 119.6-110 .6-6.7-1.7-13.3-6.3-18.2s-10.9-7.7-17.7-7.7H280c-13.3 0-24 10.7-24 24s10.7 24 24 24h40.5c-11.8 23.7-36.3 40-64.5 40-39.8 0-72-32.2-72-72"})
);

export default LanCircleGRegular;
