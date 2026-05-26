import React from 'react';

export const LanChevronLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M4.7 267.3c-6.2-6.2-6.2-16.4 0-22.6l208-208c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L38.6 256l196.7 196.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0z"})
);

export default LanChevronLeft;
