import React from 'react';

export function LanTableCellsUnlockSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 96v64h-64V96zm-64 128h25.3c17.1-42.2 56-73.2 102.7-79V96c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h241.3c-.9-5.2-1.3-10.6-1.3-16.1v-96c0-28.5 12.4-54 32-71.5V288h-16zm-64 64h-64v-64h64zm-64 64h64v64h-64zm-64-64h-64v-64h64zm-64 64h64v64h-64zm0-192V96h64v64zm128 0V96h64v64zm304 112h48c-.1-44.1-35.8-79.9-80-79.9s-80 35.8-80 80v50.6c-18.6 6.6-32 24.4-32 45.3v96c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-96v-47.9c0-17.7 14.3-32 32-32 17.6 0 31.9 14.3 32 31.9"})
  );
}

export default LanTableCellsUnlockSolid;
