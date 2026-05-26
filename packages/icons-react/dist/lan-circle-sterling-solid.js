import React from 'react';

export const LanCircleSterlingSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80-248c-8.8 0-16-7.2-16-16s7.2-16 16-16h2.9c-15.8-55.2 25.5-112 84.7-112h2.2c19.7 0 38.8 6.4 54.5 18.2l14.2 10.6c10.6 8 12.8 23 4.8 33.6s-23 12.8-33.6 4.8l-14.2-10.6C284 171 275 168 265.7 168h-2.2c-28.5 0-47.8 28.9-37 55.2l2.5 6c.4.9.7 1.8 1.1 2.8H304c8.8 0 16 7.2 16 16s-7.2 16-16 16h-67.1c1.3 23.4-5.2 46.9-19.1 66.6l-3.7 5.4H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H168c-8.9 0-17.2-5-21.3-12.9s-3.5-17.5 1.6-24.8l30.2-43.1c8.1-11.5 11.6-25.5 10.3-39.1z"})
);

export default LanCircleSterlingSolid;
