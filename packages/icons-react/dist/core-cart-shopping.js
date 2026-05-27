import React from 'react';

export const CoreCartShopping = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 0h122.2c3 15.1 7.3 36.4 12.8 64h368c41.6 0 72.2 39.1 62.1 79.5l-41.9 167.8C512.5 354 474.1 384 430 384H212.4c-45.8 0-85.2-32.3-94.1-77.2L69.8 64H0zm147.8 128 33.3 166.3c3 15 16.1 25.7 31.4 25.7H430c14.7 0 27.5-10 31-24.2L503 128zM160 464a48 48 0 1 1 96 0 48 48 0 1 1-96 0m272-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96"})
);

export default CoreCartShopping;
