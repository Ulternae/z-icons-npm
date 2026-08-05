import React from 'react';

export function LanTableCellsHeaderUnlockRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 168v248c0 35.3 28.7 64 64 64h241.3c-.9-5.2-1.3-10.6-1.3-16.1v-96c0-28.5 12.4-54 32-71.5v-.4h-24v-80h36.9c18.6-38.1 55.4-65.6 99.1-71V96c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64zm48 48h88v80h-88zm0 200v-72h88v88h-72c-8.8 0-16-7.2-16-16m216 16h-80v-88h80zm-80-216h80v80h-80zm312 56h48c-.1-44.1-35.8-79.9-80-79.9s-80 35.8-80 80v50.6c-18.6 6.6-32 24.4-32 45.3v96c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-96v-47.9c0-17.7 14.3-32 32-32 17.6 0 31.9 14.3 32 31.9"})
  );
}

export default LanTableCellsHeaderUnlockRegular;
