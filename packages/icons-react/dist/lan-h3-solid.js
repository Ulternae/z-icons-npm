import React from 'react';

export const LanH3Solid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 96c0-17.7-14.3-32-32-32S32 78.3 32 96v320c0 17.7 14.3 32 32 32s32-14.3 32-32V288h96v128c0 17.7 14.3 32 32 32s32-14.3 32-32V96c0-17.7-14.3-32-32-32s-32 14.3-32 32v128H96zm256 160c0 17.7 14.3 32 32 32h56c26.5 0 48 21.5 48 48s-21.5 48-48 48h-88c-17.7 0-32 14.3-32 32s14.3 32 32 32h88c61.9 0 112-50.1 112-112 0-31.3-12.9-59.7-33.6-80 20.7-20.3 33.6-48.7 33.6-80 0-61.9-50.1-112-112-112h-88c-17.7 0-32 14.3-32 32s14.3 32 32 32h88c26.5 0 48 21.5 48 48s-21.5 48-48 48h-56c-17.7 0-32 14.3-32 32"})
);

export default LanH3Solid;
