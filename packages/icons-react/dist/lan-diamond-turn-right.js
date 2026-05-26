import React from 'react';

export const LanDiamondTurnRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M17 297C6.1 286.1 0 271.4 0 256s6.1-30.1 17-41L215 17c10.9-10.9 25.6-17 41-17s30.1 6.1 41 17l198 198c10.9 10.9 17 25.6 17 41s-6.1 30.1-17 41L297 495c-10.9 10.9-25.6 17-41 17s-30.1-6.1-41-17zM274.3 39.6c-4.8-4.9-11.4-7.6-18.3-7.6s-13.5 2.7-18.3 7.6L39.6 237.7c-4.9 4.8-7.6 11.4-7.6 18.3s2.7 13.5 7.6 18.3l198.1 198.1c4.9 4.9 11.5 7.6 18.3 7.6s13.5-2.7 18.3-7.6l198.1-198.1c4.9-4.9 7.6-11.5 7.6-18.3s-2.7-13.5-7.6-18.3zm105 195.7-72 72c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l44.7-44.7H240c-17.7 0-32 14.3-32 32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48c0-35.3 28.7-64 64-64h89.4l-44.7-44.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l72 72c6.2 6.2 6.2 16.4 0 22.6"})
);

export default LanDiamondTurnRight;
