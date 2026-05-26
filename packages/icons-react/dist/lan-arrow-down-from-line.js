import React from 'react';

export const LanArrowDownFromLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 32C7.2 32 0 24.8 0 16S7.2 0 16 0h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zm331.3 331.3-144 144c-6.2 6.2-16.4 6.2-22.6 0l-144-144c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L176 457.4V144c0-8.8 7.2-16 16-16s16 7.2 16 16v313.4l116.7-116.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6"})
);

export default LanArrowDownFromLine;
