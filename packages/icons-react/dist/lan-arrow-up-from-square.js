import React from 'react';

export const LanArrowUpFromSquare = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 448 543.95',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m240 22.6 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-80-80c-6.2-6.2-16.4-6.2-22.6 0l-80 80c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L208 22.6V304c0 8.8 7.2 16 16 16s16-7.2 16-16zM32 192c0-17.7 14.3-32 32-32h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32z"})
);

export default LanArrowUpFromSquare;
