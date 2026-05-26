import React from 'react';

export const LanGaugeSimpleHighRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m56-160c0-14.4-5.4-27.5-14.4-37.5l60.5-145.3c5.1-12.2-.7-26.3-12.9-31.4s-26.3.7-31.4 12.9l-60.5 145.4C223.6 297.5 200 322 200 352c0 30.9 25.1 56 56 56s56-25.1 56-56"})
);

export default LanGaugeSimpleHighRegular;
