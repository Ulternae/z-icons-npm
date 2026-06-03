import React from 'react';

export const LanCalendarCircleUserSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 0c17.7 0 32 14.3 32 32v32h128V32c0-17.7 14.3-32 32-32s32 14.3 32 32v32h32c35.3 0 64 28.7 64 64v48H32v-48c0-35.3 28.7-64 64-64h32V32c0-17.7 14.3-32 32-32M32 224h323.1C287.3 253.6 240 321.3 240 400c0 28.6 6.2 55.6 17.4 80H96c-35.3 0-64-28.7-64-64zm256 176a144 144 0 1 1 288 0 144 144 0 1 1-288 0m221.7 80.7c-6.2-19-24-32.7-45.1-32.7h-65.2c-21 0-38.9 13.7-45.1 32.7 20.1 19.4 47.5 31.3 77.7 31.3s57.5-11.9 77.7-31.3M480 368a48 48 0 1 0-96 0 48 48 0 1 0 96 0"})
);

export default LanCalendarCircleUserSolid;
