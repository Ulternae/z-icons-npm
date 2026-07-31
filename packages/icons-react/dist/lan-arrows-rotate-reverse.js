import React from 'react';

export const LanArrowsRotateReverse = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M479.5 241.1c-3.5-52.3-25.2-103.5-65.1-143.5C370.7 53.9 313.4 32 256 32c-62 0-121.2 25.5-163.8 70.6L53.1 144H160c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16V16C0 7.2 7.2 0 16 0s16 7.2 16 16v103.8l37-39.1C117.6 29.2 185.3.1 256 .1c65.5 0 131 25 181 75 45.6 45.6 70.5 104.3 74.4 164 .6 8.8-6.1 16.4-14.9 17s-16.4-6.1-17-14.9zM32.5 271c3.5 52.3 25.2 103.5 65.1 143.4 43.7 43.7 101 65.6 158.4 65.6 62 0 121.2-25.5 163.8-70.6l39.1-41.4H352c-8.8 0-16-7.2-16-16s7.2-16 16-16h144c8.8 0 16 7.2 16 16v144c0 8.8-7.2 16-16 16s-16-7.2-16-16V392.2l-37 39.1c-48.6 51.5-116.3 80.6-187 80.6-65.5 0-131-25-181-75C29.4 391.3 4.6 332.6.6 272.9c-.6-8.8 6.1-16.4 14.9-17s16.4 6.1 17 14.9z"})
);

export default LanArrowsRotateReverse;
