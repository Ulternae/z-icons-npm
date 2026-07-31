import React from 'react';

export const LanCarOn = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 448 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M240-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16zM131.9 176h184.2c14.2 0 26.7 9.4 30.7 23l21.5 73H79.8l21.5-73c4-13.6 16.5-23 30.7-23zm-61.4 13.9-24.9 84.8C19.2 282.6 0 307.1 0 336v160c0 8.8 7.2 16 16 16s16-7.2 16-16v-32h384v32c0 8.8 7.2 16 16 16s16-7.2 16-16V336c0-28.9-19.2-53.4-45.6-61.3L377.5 190c-8-27.2-33-45.9-61.4-45.9H131.9c-28.4 0-53.4 18.7-61.4 45.9zM416 384v48H32v-96c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32zm-320 8a24 24 0 1 0 0-48 24 24 0 1 0 0 48m280-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0M4.7 4.7c-6.2 6.2-6.2 16.4 0 22.6l56 56c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-56-56c-6.2-6.2-16.4-6.2-22.6 0m416 0-56 56c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l56-56c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0"})
);

export default LanCarOn;
