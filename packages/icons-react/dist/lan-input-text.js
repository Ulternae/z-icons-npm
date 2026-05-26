import React from 'react';

export const LanInputText = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 96c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm32 160v112c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h64v48c0 8.8 7.2 16 16 16s16-7.2 16-16V224c0-35.3-28.7-64-64-64s-64 28.7-64 64m96 32h-64v-32c0-17.7 14.3-32 32-32s32 14.3 32 32zm80-80v160c0 8.8 7.2 16 16 16h64c30.9 0 56-25.1 56-56 0-17.8-8.3-33.6-21.2-43.9 8.2-9.8 13.2-22.4 13.2-36.1 0-30.9-25.1-56-56-56h-56c-8.8 0-16 7.2-16 16m96 40c0 13.3-10.7 24-24 24h-40v-48h40c13.3 0 24 10.7 24 24m-64 104v-48h48c13.3 0 24 10.7 24 24s-10.7 24-24 24z"})
);

export default LanInputText;
