import React from 'react';

export const LanSquarePollVerticalThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm112 272c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16m112 0c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16s-16 7.2-16 16v192c0 8.8 7.2 16 16 16m112 0c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16s-16 7.2-16 16v32c0 8.8 7.2 16 16 16M80 352v-96c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32m112 0V160c0-17.7 14.3-32 32-32s32 14.3 32 32v192c0 17.7-14.3 32-32 32s-32-14.3-32-32m112 0v-32c0-17.7 14.3-32 32-32s32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32"})
);

export default LanSquarePollVerticalThin;
