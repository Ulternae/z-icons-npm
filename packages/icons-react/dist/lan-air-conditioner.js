import React from 'react';

export const LanAirConditioner = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 96c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zM0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm112 64h352c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16m112 288V368h32v112c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-8.8 7.2-16 16-16s16 7.2 16 16c0 17.7 14.3 32 32 32s32-14.3 32-32m128-112v112c0 17.7 14.3 32 32 32s32-14.3 32-32v-8c0-8.8 7.2-16 16-16s16 7.2 16 16v8c0 35.3-28.7 64-64 64s-64-28.7-64-64V368z"})
);

export default LanAirConditioner;
