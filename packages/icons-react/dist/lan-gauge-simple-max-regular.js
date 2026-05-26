import React from 'react';

export const LanGaugeSimpleMaxRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 464a208 208 0 1 0 0-416 208 208 0 1 0 0 416m0-464a256 256 0 1 1 0 512 256 256 0 1 1 0-512m-56 352c0-30.9 25.1-56 56-56 9.4 0 18.3 2.3 26.1 6.4l87.5-65.6c10.6-8 25.6-5.8 33.6 4.8s5.8 25.6-4.8 33.6l-87.5 65.6c.7 3.6 1.1 7.3 1.1 11.2 0 30.9-25.1 56-56 56s-56-25.1-56-56"})
);

export default LanGaugeSimpleMaxRegular;
