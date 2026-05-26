import React from 'react';

export const LanFileLockSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 0C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h209.3c-.9-5.2-1.3-10.6-1.3-16.1v-96c0-28.5 12.4-54 32-71.5V304c0-53.7 33.1-99.7 80-118.7v-14.8c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0zm261.5 176H264c-13.3 0-24-10.7-24-24V58.5zM496 304.1V352h-64v-47.9c0-17.7 14.3-32 32-32s32 14.3 32 32M352 400v96c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-96c0-20.9-13.4-38.7-32-45.3v-50.6c0-44.2-35.8-80-80-80s-80 35.8-80 80v50.6c-18.6 6.6-32 24.4-32 45.3"})
);

export default LanFileLockSolid;
