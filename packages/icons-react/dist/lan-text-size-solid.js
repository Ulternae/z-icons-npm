import React from 'react';

export const LanTextSizeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 128V96h64v320H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32V96h64v32c0 17.7 14.3 32 32 32s32-14.3 32-32V72c0-22.1-17.9-40-40-40H40C17.9 32 0 49.9 0 72v56c0 17.7 14.3 32 32 32s32-14.3 32-32m256 192v-32h64v128h-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32V288h64v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-56c0-22.1-17.9-40-40-40H296c-22.1 0-40 17.9-40 40v56c0 17.7 14.3 32 32 32s32-14.3 32-32"})
);

export default LanTextSizeSolid;
