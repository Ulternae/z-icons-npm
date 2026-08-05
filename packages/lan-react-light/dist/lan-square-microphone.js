import React from 'react';

export function LanSquareMicrophone({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm160 64c0-35.3 28.7-64 64-64s64 28.7 64 64v96c0 35.3-28.7 64-64 64s-64-28.7-64-64zm64-32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96c0-17.7-14.3-32-32-32m-112 96c8.8 0 16 7.2 16 16v16c0 53 43 96 96 96s96-43 96-96v-16c0-8.8 7.2-16 16-16s16 7.2 16 16v16c0 65.3-48.9 119.1-112 127v17c0 8.8-7.2 16-16 16s-16-7.2-16-16v-17c-63.1-7.9-112-61.7-112-127v-16c0-8.8 7.2-16 16-16"})
  );
}

export default LanSquareMicrophone;
