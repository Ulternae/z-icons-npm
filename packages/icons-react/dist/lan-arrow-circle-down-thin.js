import React from 'react';

export const LanArrowCircleDownThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-5.7-162.3c3.1 3.1 8.2 3.1 11.3 0l72-72c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L264 324.7V168c0-4.4-3.6-8-8-8s-8 3.6-8 8v156.7l-58.3-58.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l72 72z"})
);

export default LanArrowCircleDownThin;
