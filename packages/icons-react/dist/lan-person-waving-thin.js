import React from 'react';

export const LanPersonWavingThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192-16a40 40 0 1 0 0 80 40 40 0 1 0 0-80m56 40a56 56 0 1 1-112 0 56 56 0 1 1 112 0m72-40c-8.8 0-16 7.2-16 16v50c0 33.5-23.1 62.6-55.8 70.2l-114 26.3c-20.6 4.7-38.6 17.5-49.8 35.5l-66 105.5c-4.7 7.5-2.4 17.4 5.1 22q-6.3 10.2 0 0c7.5 4.7 17.4 2.4 22-5.1l66-105.4c.6-1 1.3-2 2-3 2-2.8 5.7-3.9 8.9-2.9s5.5 4.1 5.5 7.6L128 512c0 8.8 7.2 16 16 16s16-7.2 16-16V352c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v160c0 8.8 7.2 16 16 16s16-7.2 16-16V160c0-.6 0-1.2-.1-1.8-.4-3.8 2-7.4 5.7-8.5 43.9-13 74.4-53.4 74.4-99.7V0c0-8.8-7.2-16-16-16M288 0c0-17.7 14.3-32 32-32s32 14.3 32 32v50c0 51.3-32.5 96.4-80 113.1V512c0 17.7-14.3 32-32 32s-32-14.3-32-32V360h-32v152c0 17.7-14.3 32-32 32s-32-14.3-32-32V228.4L59.1 313C49.7 328 30 332.5 15 323.2S-4.5 294 4.9 279l65.9-105.5c13.5-21.6 35-36.9 59.8-42.7l114-26.3C270 98.7 288 76.1 288 50z"})
);

export default LanPersonWavingThin;
