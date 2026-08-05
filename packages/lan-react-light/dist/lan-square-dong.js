import React from 'react';

export function LanSquareDong({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm256 16c0-8.8 7.2-16 16-16s16 7.2 16 16v16h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v176c0 8.8-7.2 16-16 16s-16-7.2-16-16c-13.4 10-30 16-48 16-44.2 0-80-35.8-80-80s35.8-80 80-80c18 0 34.6 6 48 16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48zm-48 112a48 48 0 1 0 0 96 48 48 0 1 0 0-96m-96 176c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H128c-8.8 0-16-7.2-16-16"})
  );
}

export default LanSquareDong;
