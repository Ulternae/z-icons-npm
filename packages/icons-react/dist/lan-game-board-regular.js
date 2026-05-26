import React from 'react';

export const LanGameBoardRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M136 432H64c-8.8 0-16-7.2-16-16v-72h88zm88 0v-88h-88v-88H48v-88h88V80h88v88h88V80h72c8.8 0 16 7.2 16 16v72h-88v88h88v88h-88v88zm0-176v88h88v-88zm0 0v-88h-88v88zM64 480h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 33.1 25.2 60.4 57.5 63.7z"})
);

export default LanGameBoardRegular;
