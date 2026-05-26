import React from 'react';

export const LanArrowDownLeftAndArrowUpRightToCenter = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M507.3 27.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L320 169.4V64c0-8.8-7.2-16-16-16s-16 7.2-16 16v144c0 8.8 7.2 16 16 16h144c8.8 0 16-7.2 16-16s-7.2-16-16-16H342.6zM4.7 484.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 342.6V448c0 8.8 7.2 16 16 16s16-7.2 16-16V304c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16s7.2 16 16 16h105.4z"})
);

export default LanArrowDownLeftAndArrowUpRightToCenter;
