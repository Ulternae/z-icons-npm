import React from 'react';

export const LanChalkboardUser = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 64h352c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32h-32v-64c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32v64h-29.9c4.8 10.1 8.5 20.8 10.9 32h211c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H192c-35.3 0-64 28.7-64 64v49c5.2-.7 10.6-1 16-1s10.8.3 16 1V96c0-17.7 14.3-32 32-32m192 352v-64h96v64zM96 272a48 48 0 1 1 96 0 48 48 0 1 1-96 0m128 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0M96 384c-53 0-96 43-96 96v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-35.3 28.7-64 64-64h96c35.3 0 64 28.7 64 64v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-53-43-96-96-96z"})
);

export default LanChalkboardUser;
