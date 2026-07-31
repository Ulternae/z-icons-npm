import React from 'react';

export const LanCircleWRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80.8-350.3c-3.5-12.8-16.7-20.3-29.5-16.8s-20.3 16.7-16.8 29.5l48 176c2.8 10.3 12 17.5 22.7 17.7s20.1-6.6 23.4-16.7l33-104.2 33.1 104.1c3.2 10.1 12.7 16.9 23.4 16.7s19.9-7.4 22.7-17.7l48-176c3.5-12.8-4.1-26-16.8-29.5s-26 4.1-29.5 16.8l-26.6 97.6-31.4-98.6c-3.2-10-12.4-16.7-22.9-16.7s-19.7 6.8-22.9 16.7l-31.4 98.6-26.6-97.6z"})
);

export default LanCircleWRegular;
