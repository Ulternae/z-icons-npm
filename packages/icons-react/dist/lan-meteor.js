import React from 'react';

export const LanMeteor = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M320 32c0-26.4-30.1-41.4-51.2-25.6L81.1 147.2C30 185.5 0 246.1 0 309.8 0 420.9 90 512 201.3 512c64.6 0 125.3-31 163.1-83.4l134.2-185.9c15.3-21.2.2-50.7-25.9-50.7h-26.1L509 50.3c2-4.5 3-9.5 3-14.4C512 16.1 496 .1 476.2.1c-5 0-9.9 1-14.4 3L320 65.4zm154.6.3q.75-.3 1.5-.3c2.1 0 3.8 1.7 3.8 3.8 0 .5-.1 1.1-.3 1.5l-72.2 164.3c-2.2 4.9-1.7 10.7 1.2 15.2s8 7.3 13.4 7.3h50.6L338.4 409.9c-31.7 44-82.8 70.1-137.1 70.1C107.9 480 32 403.4 32 309.8c0-53.8 25.3-104.8 68.3-137L288 32v57.9c0 5.4 2.7 10.4 7.3 13.4s10.2 3.4 15.2 1.2zM296 312a96 96 0 1 1-192 0 96 96 0 1 1 192 0m-96-128a128 128 0 1 0 0 256 128 128 0 1 0 0-256m-16 120a24 24 0 1 0 0-48 24 24 0 1 0 0 48m56 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0"})
);

export default LanMeteor;
