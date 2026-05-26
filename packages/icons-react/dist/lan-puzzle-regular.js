import React from 'react';

export const LanPuzzleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 0c35.3 0 64 28.7 64 64v128c0 8.8-7.2 16-16 16h-52c-6.6 0-12 5.4-12 12v4c0 17.7-14.3 32-32 32s-32-14.3-32-32v-4c0-6.6-5.4-12-12-12h-36c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h16c17.7 0 32-14.3 32-32s-14.3-32-32-32h-16c-8.8 0-16-7.2-16-16V16c0-8.8 7.2-16 16-16zM0 240V128c0-35.3 28.7-64 64-64h144c8.8 0 16 7.2 16 16v52c0 6.6 5.4 12 12 12h4c17.7 0 32 14.3 32 32s-14.3 32-32 32h-4c-6.6 0-12 5.4-12 12v52c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-16c0-17.7-14.3-32-32-32s-32 14.3-32 32v16c0 8.8-7.2 16-16 16H48v152c0 13.3 10.7 24 24 24h152v-36c0-6.6-5.4-12-12-12h-4c-17.7 0-32-14.3-32-32s14.3-32 32-32h4c6.6 0 12-5.4 12-12v-36c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-16c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v144c0 35.3-28.7 64-64 64H72c-39.8 0-72-32.2-72-72z"})
);

export default LanPuzzleRegular;
