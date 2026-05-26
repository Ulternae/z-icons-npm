import React from 'react';

export const LanCircleMRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-68.6-358.2c-6.1-8.4-17-11.8-26.8-8.6S144 157.6 144 168v176c0 13.3 10.7 24 24 24s24-10.7 24-24V241.3l44.6 60.9c4.5 6.2 11.7 9.8 19.4 9.8s14.8-3.6 19.4-9.8l44.6-60.9V344c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-10.4-6.7-19.6-16.5-22.8s-20.7.2-26.8 8.6l-68.6 93.6-68.6-93.6z"})
);

export default LanCircleMRegular;
