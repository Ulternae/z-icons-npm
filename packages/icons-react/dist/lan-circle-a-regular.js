import React from 'react';

export const LanCircleARegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-368c-9.1 0-17.4 5.1-21.5 13.3l-88 176c-5.9 11.9-1.1 26.3 10.7 32.2s26.3 1.1 32.2-10.7l9.4-18.7h114.3l9.4 18.7c5.9 11.9 20.3 16.7 32.2 10.7s16.7-20.3 10.7-32.2l-88-176c-4.1-8.1-12.4-13.3-21.5-13.3zm0 77.7 33.2 66.3h-66.3l33.2-66.3z"})
);

export default LanCircleARegular;
