import React from 'react';

export const LanPersonSkiJumping = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 512 552.011',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M408 64a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0-80a56 56 0 1 1 0 112 56 56 0 1 1 0-112M128 128c0-8.8 7.2-16 16-16h191.9c43.3 0 64.5 52.9 33.1 82.8L196.1 359.3l-13.5 60.6 254.8-131.8c21.3-11 34.6-32.9 34.6-56.8V224c0-8.8 7.2-16 16-16s16 7.2 16 16v7.3c0 35.9-20 68.8-51.9 85.3L31.4 534.2c-7.8 4.1-17.5 1-21.6-6.9s-1-17.5 6.9-21.6l128.9-66.6L188.1 248c3.5-15.8 11.8-30.2 23.7-41.3l67.5-62.7H144c-8.8 0-16-7.2-16-16m198.3 16-92.8 86.2c-7.1 6.6-12.1 15.3-14.2 24.8l-10.8 48.3L347 171.6c10.5-10 3.4-27.6-11-27.6z"})
);

export default LanPersonSkiJumping;
