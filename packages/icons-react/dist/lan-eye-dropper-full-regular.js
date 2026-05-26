import React from 'react';

export const LanEyeDropperFullRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m199 169 110.1 110.1L351 321c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-8-8 105.2-105.2c19.1-19.1 29.8-45 29.8-72C511.9 45.7 466.3.1 410.1.1c-27 0-52.9 10.7-72 29.8L232.9 135.1l-8-8c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9zm249.2-29.1L343 245.1 266.9 169 372.1 63.8C382.2 53.7 395.9 48 410.2 48c29.7 0 53.8 24.1 53.8 53.8 0 14.3-5.7 28-15.8 38.1M53.1 329A71.98 71.98 0 0 0 32 379.9v52.9l-28 42c-6.3 9.5-5.1 22.2 3 30.3s20.8 9.3 30.3 3l42-28h52.9c19.1 0 37.4-7.6 50.9-21.1l119-119-129.9-129.9-119 119z"})
);

export default LanEyeDropperFullRegular;
