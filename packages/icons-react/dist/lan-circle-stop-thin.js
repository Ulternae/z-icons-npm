import React from 'react';

export const LanCircleStopThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80-320c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H192c-8.8 0-16-7.2-16-16zm-16 0v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32"})
);

export default LanCircleStopThin;
