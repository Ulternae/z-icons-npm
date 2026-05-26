import React from 'react';

export const LanH6Solid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 64c17.7 0 32 14.3 32 32v128h96V96c0-17.7 14.3-32 32-32s32 14.3 32 32v320c0 17.7-14.3 32-32 32s-32-14.3-32-32V288H64v128c0 17.7-14.3 32-32 32S0 433.7 0 416V96c0-17.7 14.3-32 32-32m352 64c-17.7 0-32 14.3-32 32v53.5c10-3.5 20.8-5.5 32-5.5h32c53 0 96 43 96 96v48c0 53-43 96-96 96h-32c-53 0-96-43-96-96V160c0-53 43-96 96-96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32zm-32 176v48c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-48c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32"})
);

export default LanH6Solid;
