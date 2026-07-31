import React from 'react';

export const LanMoneyBillWaveRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112 429.5c-1.4-34.2-29.5-61.5-64-61.5V192c32.1 0 58.7-23.7 63.3-54.6 63.8 3.2 115.3-14 160.7-29.1l4.8-1.6c42.1-14 79.4-25.9 123.3-24.2 1.3 34.2 29.5 61.5 64 61.5v176c-32.1 0-58.7 23.7-63.3 54.6-63.8-3.2-115.3 14-160.7 29.1l-4.7 1.6c-42.1 14-79.4 25.9-123.3 24.2zM48 128v-.2l.8.2zm416 256v.2c-.3-.1-.5-.1-.8-.2zM0 109.5v310.1c0 19.4 11.8 37.3 30.3 43.3 94 30 158.8 8.4 223.3-13.1C316 429 378 408.3 465.7 434.5c22.2 6.6 46.2-8.8 46.2-32V92.4c0-19.4-11.8-37.3-30.3-43.3-94-30-158.8-8.4-223.3 13.1C195.9 83 133.9 103.7 46.2 77.5 24 70.9-.1 86.3-.1 109.5zM336 256c0-53-35.8-96-80-96s-80 43-80 96 35.8 96 80 96 80-43 80-96"})
);

export default LanMoneyBillWaveRegular;
