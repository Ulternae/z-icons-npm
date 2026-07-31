import React from 'react';

export const LanImagesUser = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160 64c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h48v-16c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80v16h48c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm80 320h160v-16c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48zM96 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64zm-64 48v304c0 17.7 14.3 32 32 32h368c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-35.3 0-64-28.7-64-64V144c0-8.8 7.2-16 16-16s16 7.2 16 16m288 80a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128"})
);

export default LanImagesUser;
