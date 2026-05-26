import React from 'react';

export const LanCircleNRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-53.4-359.2c-6.4-7.9-17.1-10.8-26.6-7.4s-16 12.5-16 22.6v176c0 13.3 10.7 24 24 24s24-10.7 24-24V235.2l101.4 124c6.4 7.9 17.1 10.8 26.6 7.4s16-12.5 16-22.6V168c0-13.3-10.7-24-24-24s-24 10.7-24 24v108.8z"})
);

export default LanCircleNRegular;
