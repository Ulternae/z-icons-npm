import React from 'react';

export const LanMaleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M152 24a40 40 0 1 1 80 0 40 40 0 1 1-80 0m96 0a56 56 0 1 0-112 0 56 56 0 1 0 112 0M98.9 177.1c21-30.8 55.9-49.1 93.1-49.1s72.1 18.4 93.1 49.1l64.1 93.9c5 7.3 3.1 17.3-4.2 22.2s-17.3 3.1-22.2-4.2l-52.2-76.4c-2-2.9-5.6-4.2-9-3.1s-5.6 4.1-5.6 7.6V512c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-17.7-14.3-32-32-32s-32 14.3-32 32v144c0 8.8-7.2 16-16 16s-16-7.2-16-16V217.2c0-3.5-2.3-6.6-5.6-7.6s-7 .2-9 3.1L61.2 289c-5 7.3-14.9 9.2-22.2 4.2s-9.2-14.9-4.2-22.2l64.1-93.8zM192 112c-42.5 0-82.3 21-106.3 56.1l-64.1 93.8c-10 14.6-6.2 34.5 8.4 44.5s34.5 6.2 44.5-8.4l37.6-55v268.9c0 17.7 14.3 32 32 32s32-14.3 32-32v-144c0-8.8 7.2-16 16-16s16 7.2 16 16v144c0 17.7 14.3 32 32 32s32-14.3 32-32V243l37.6 55c10 14.6 29.9 18.3 44.5 8.4s18.3-29.9 8.4-44.5l-64.1-93.8C274.3 133 234.5 112 192 112"})
);

export default LanMaleThin;
