import React from 'react';

export const LanCircleLocationArrowThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M127.7 283c-11.7 0-21.9-8.3-24.2-19.8-2.4-11.4 3.7-23.1 14.5-27.7L338.5 141c9.5-3.9 20.2-1.9 27.3 5.3 7.2 7.1 9.2 17.8 5.2 27.2L276.5 394c-3.9 9.1-12.9 15-22.8 15-13.4 0-24.7-11.3-24.7-24.8V283zm-3.4-32.8c-8.5 3.6-5.8 16.8 3.4 16.8H229c8.8 0 16 7.2 16 16v101.2c0 9.5 13.1 12 16.8 3.4l94.5-220.5c3.2-7.4-4.4-14.4-11.6-11.5zM0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m496 0a240 240 0 1 0-480 0 240 240 0 1 0 480 0"})
);

export default LanCircleLocationArrowThin;
