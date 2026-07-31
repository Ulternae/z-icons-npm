import React from 'react';

export const LanCircleIndianRupeeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-392c-13.3 0-24 10.7-24 24s10.7 24 24 24h40c16.4 0 30.5 9.9 36.7 24H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h84.7c-6.2 14.1-20.3 24-36.7 24h-40c-10.2 0-19.3 6.4-22.6 16.1s-.3 20.3 7.7 26.7l120 96c10.3 8.3 25.5 6.6 33.7-3.8s6.6-25.5-3.7-33.7l-70.8-56.6c31.8-9.1 56.3-35.6 62.3-68.6h25.5c8.8 0 16-7.2 16-16s-7.2-16-16-16h-25.5c-2.8-15-9.3-28.7-18.7-40H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H184z"})
);

export default LanCircleIndianRupeeRegular;
