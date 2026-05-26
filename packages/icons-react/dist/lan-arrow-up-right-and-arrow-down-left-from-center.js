import React from 'react';

export const LanArrowUpRightAndArrowDownLeftFromCenter = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M292.7 196.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L480 54.6V160c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16H352c-8.8 0-16 7.2-16 16s7.2 16 16 16h105.4zm-73.4 118.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L32 457.4V352c0-8.8-7.2-16-16-16s-16 7.2-16 16v144c0 8.8 7.2 16 16 16h144c8.8 0 16-7.2 16-16s-7.2-16-16-16H54.6z"})
);

export default LanArrowUpRightAndArrowDownLeftFromCenter;
