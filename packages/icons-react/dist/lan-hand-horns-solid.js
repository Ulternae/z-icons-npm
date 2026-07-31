import React from 'react';

export const LanHandHornsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 32C32 14.3 46.3 0 64 0s32 14.3 32 32v208H32zm192 160c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32zm-64-64c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32s-32-14.3-32-32v-48c0-17.7 14.3-32 32-32m160-32c0-17.7 14.3-32 32-32s32 14.3 32 32v256c0 88.4-71.6 160-160 160h-61.7c-42.4 0-83.1-16.9-113.1-46.9l-11.7-11.6C13.5 429.5 0 396.9 0 363v-27c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72v-.6c9.4 5.4 20.3 8.6 32 8.6 35.3 0 64-28.7 64-64z"})
);

export default LanHandHornsSolid;
