import React from 'react';

export const LanCircleBoltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-95.4-240c-9.2 0-16.6-7.4-16.6-16.6 0-4.7 2-9.2 5.5-12.4l141.2-126.3c3.4-3 7.8-4.7 12.4-4.7 12.4 0 21.3 12 17.8 23.9L289.7 240h61.8c9.2 0 16.6 7.4 16.6 16.6 0 4.7-2 9.2-5.5 12.4L221.3 395.3c-3.4 3-7.8 4.7-12.4 4.7-12.4 0-21.3-12-17.8-23.9L222.3 272h-61.8z"})
);

export default LanCircleBoltSolid;
