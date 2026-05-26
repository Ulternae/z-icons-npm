import React from 'react';

export const LanCameraCircleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-40.9-377.4L196.6 160H176c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-22.4L297 135.1c-3-4.5-8-7.1-13.3-7.1H228c-5.1 0-9.9 2.4-12.9 6.6m68.6 9.4 19 28.4c1.5 2.2 4 3.6 6.7 3.6h26.7c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-160c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32h24.7c2.6 0 5-1.2 6.5-3.3l20.9-28.7h55.7zm-62 112a34.3 34.3 0 1 1 68.6 0 34.3 34.3 0 1 1-68.6 0m82.3 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0"})
);

export default LanCameraCircleThin;
