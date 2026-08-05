import React from 'react';

export function LanTableCellsRowLock({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 64h224c17.7 0 32 14.3 32 32v57.3c10.1-4.1 20.8-6.9 32-8.3V96c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h241.3c-.9-5.2-1.3-10.6-1.3-16.1V448H224v-96h145.3c1.9-11.5 5.9-22.3 11.5-32H224V192h204.1c10.4-13 23.3-23.9 37.9-32H224zm-32 384h-64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h64zm256-127.9v2.6c-18.6 6.6-32 24.4-32 45.3v96c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-96c0-20.9-13.4-38.7-32-45.3v-50.6c0-44.2-35.8-80-80-80s-80 35.8-80 80zm0 47.9c0-8.2 6.2-15 14.3-15.9h131.5c8 .9 14.3 7.7 14.3 15.9v96c0 8.8-7.2 16-16 16h-128c-8.8 0-16-7.2-16-16v-96zm128-95.9V320h-96v-47.9c0-26.5 21.5-48 48-48s48 21.5 48 48"})
  );
}

export default LanTableCellsRowLock;
