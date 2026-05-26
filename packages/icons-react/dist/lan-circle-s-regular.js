import React from 'react';

export const LanCircleSRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-21.5-368c-36.7 0-66.5 29.8-66.5 66.5 0 33.5 25 61.8 58.2 66l53.6 6.7c9.3 1.2 16.2 9 16.2 18.3 0 10.2-8.3 18.5-18.5 18.5H200c-13.3 0-24 10.7-24 24s10.7 24 24 24h77.5c36.7 0 66.5-29.8 66.5-66.5 0-33.5-25-61.8-58.2-66l-53.6-6.7c-9.3-1.2-16.2-9-16.2-18.3 0-10.2 8.3-18.5 18.5-18.5H304c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanCircleSRegular;
