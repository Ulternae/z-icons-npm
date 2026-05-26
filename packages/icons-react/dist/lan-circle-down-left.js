import React from 'react';

export const LanCircleDownLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 0 0 448 224 224 0 1 0 0-448m0 480a256 256 0 1 1 0-512 256 256 0 1 1 0 512m-64-292.7V320h100.7L268 295.3c-6.2-6.2-6.2-16.4 0-22.6l64.7-64.7-28.7-28.7-64.7 64.7c-3 3-7.1 4.7-11.3 4.7s-8.3-1.7-11.3-4.7zM184 352c-13.3 0-24-10.7-24-24V200c0-21.2 26-32 41-17l27 27 59-59c9.4-9.4 24.6-9.4 33.9 0l40 40c9.4 9.4 9.4 24.6 0 33.9l-59 59 27 27c15 15 4.3 41-17 41h-128z"})
);

export default LanCircleDownLeft;
