import React from 'react';

export const LanCircleMThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-81.5-348.7c-2-2.8-5.7-3.9-8.9-2.9s-5.5 4.1-5.5 7.6v176c0 4.4 3.6 8 8 8s8-3.6 8-8V192.4l73.5 100.3c1.5 2.1 3.9 3.3 6.5 3.3s4.9-1.2 6.5-3.3L336 192.4V344c0 4.4 3.6 8 8 8s8-3.6 8-8V168c0-3.5-2.2-6.5-5.5-7.6s-6.9.1-8.9 2.9L256 274.5z"})
);

export default LanCircleMThin;
