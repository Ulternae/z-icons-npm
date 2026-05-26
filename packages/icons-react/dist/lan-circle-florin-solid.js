import React from 'react';

export const LanCircleFlorinSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m16.4-355.3c9.5-22.3 31.4-36.7 55.7-36.7H352c13.3 0 24 10.7 24 24s-10.7 24-24 24h-23.9c-5 0-9.6 3-11.6 7.6L295.8 224H328c13.3 0 24 10.7 24 24s-10.7 24-24 24h-52.7l-35.7 83.3c-9.6 22.3-31.5 36.7-55.7 36.7H160c-13.3 0-24-10.7-24-24s10.7-24 24-24h23.9c5 0 9.6-3 11.6-7.6l27.6-64.4h-39c-13.3 0-24-10.7-24-24s10.7-24 24-24h59.6l28.8-67.3z"})
);

export default LanCircleFlorinSolid;
