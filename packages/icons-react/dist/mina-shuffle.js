import React from 'react';

export const MinaShuffle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M15.5 4h4.412v4.444M4 20 19 5m1 10.5V20h-4.5M14 14l5.294 5.333M4 4l6 6"})
);

export default MinaShuffle;
