import React from 'react';

export const LanCircle7Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-56-368c-13.3 0-24 10.7-24 24s10.7 24 24 24h73.2l-70.6 141.3c-5.9 11.9-1.1 26.3 10.7 32.2s26.3 1.1 32.2-10.7l88-176c3.7-7.4 3.3-16.3-1-23.4S320.3 144 312 144z"})
);

export default LanCircle7Regular;
