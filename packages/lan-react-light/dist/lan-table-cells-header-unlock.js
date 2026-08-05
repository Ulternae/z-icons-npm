import React from 'react';

export function LanTableCellsHeaderUnlock({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128 64h320c17.7 0 32 14.3 32 32v57.3c10.1-4.1 20.8-6.9 32-8.3V96c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h241.3c-.9-5.2-1.3-10.6-1.3-16.1V448H224V336h149.4c2.7-7.5 6.2-14.6 10.6-21.2V192h44.1c10.4-13 23.3-23.9 37.9-32H96V96c0-17.7 14.3-32 32-32M96 304V192h96v112zm0 32h96v112h-64c-17.7 0-32-14.3-32-32zm128-32V192h128v112zm352-32h32c-.1-44.1-35.8-79.9-80-79.9s-80 35.8-80 80v50.6c-18.6 6.6-32 24.4-32 45.3v96c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48H480v-47.9c0-26.5 21.5-48 48-48s47.9 21.4 48 47.9m-96 80.1h64v-.1h48c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16v-96c0-8.2 6.2-15 14.3-15.9z"})
  );
}

export default LanTableCellsHeaderUnlock;
