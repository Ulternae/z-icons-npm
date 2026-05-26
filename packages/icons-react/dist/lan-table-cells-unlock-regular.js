import React from 'react';

export const LanTableCellsUnlockRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M376 80h72c8.8 0 16 7.2 16 16v65.1c14.5-8.4 30.7-14 48-16.1V96c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h241.3c-.9-5.2-1.3-10.6-1.3-16.1v-96c0-28.5 12.4-54 32-71.5v-.4h-24v-80h36.9c9.3-19.2 23.3-35.7 40.5-48H376zm-48 0v88h-80V80zm-128 0v88h-88V96c0-8.8 7.2-16 16-16zm-88 216v-80h88v80zm0 48h88v88h-72c-8.8 0-16-7.2-16-16zm136 88v-88h80v88zm0-136v-80h80v80zm312-24h48c-.1-44.1-35.8-79.9-80-79.9s-80 35.8-80 80v50.6c-18.6 6.6-32 24.4-32 45.3v96c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-96v-47.9c0-17.7 14.3-32 32-32 17.6 0 31.9 14.3 32 31.9"})
);

export default LanTableCellsUnlockRegular;
