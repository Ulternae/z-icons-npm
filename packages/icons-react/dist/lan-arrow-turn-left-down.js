import React from 'react';

export const LanArrowTurnLeftDown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M368 32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96c-53 0-96 43-96 96v361.4L59.3 340.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l144 144c3 3 7.1 4.7 11.3 4.7s8.3-1.7 11.3-4.7l144-144c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L208 457.4V96c0-35.3 28.7-64 64-64z"})
);

export default LanArrowTurnLeftDown;
