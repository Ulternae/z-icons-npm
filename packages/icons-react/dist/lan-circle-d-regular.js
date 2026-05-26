import React from 'react';

export const LanCircleDRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-368c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24h72c61.9 0 112-50.1 112-112s-50.1-112-112-112zm72 176h-48V192h48c35.3 0 64 28.7 64 64s-28.7 64-64 64"})
);

export default LanCircleDRegular;
