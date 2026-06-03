import React from 'react';

export const LanHandHeartSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 551.975',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M549.1 304c41.4 0 74.9 33.5 74.9 74.9v2.5c0 64.4-82 133.4-122.2 163.3-13 9.7-30.5 9.7-43.5 0-40.2-30-122.2-98.9-122.2-163.3v-2.5c0-41.3 33.5-74.9 74.9-74.9 24 0 46.6 11.5 60.7 31l8.4 11.7 8.4-11.7c14.1-19.5 36.7-31 60.7-31zM320 0c17.7 0 32 14.3 32 32v176c0 8.8 7.2 16 16 16s16-7.2 16-16V64c0-17.7 14.3-32 32-32s32 14.3 32 32v144c0 8.8 7.2 16 16 16s16-7.2 16-16v-80c0-17.7 14.3-32 32-32s32 14.3 32 32v128.2c-23.1 1-45.3 8.3-64 21.1-20.1-13.7-44.2-21.3-69.1-21.3C343 256 288 311 288 378.9v2.5c0 50.7 31 95.5 58 126.2 1.3 1.5 2.7 2.9 4 4.4h-1.2c-59.6 0-116.9-22.9-160-64L76.4 341c-16-15.2-16.6-40.6-1.4-56.6s40.6-16.6 56.6-1.4l60.5 57.6c0-1.5-.1-3.1-.1-4.6V64c0-17.7 14.3-32 32-32s32 14.3 32 32v144c0 8.8 7.2 16 16 16s16-7.2 16-16V32c0-17.7 14.3-32 32-32"})
);

export default LanHandHeartSolid;
