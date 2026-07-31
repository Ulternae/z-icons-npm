import React from 'react';

export const LanTableCellsUnlock = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 64h-64v96h82c-14.6 8.1-27.5 19-37.9 32H384v122.8c-7.3 11-12.4 23.6-14.7 37.2H224v96h144v15.9c0 5.5.5 10.9 1.3 16.1H128c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v49c-11.2 1.4-21.9 4.2-32 8.3V96c0-17.7-14.3-32-32-32m-224 0v96h128V64zm-96 0c-17.7 0-32 14.3-32 32v64h96V64zM96 192v128h96V192zm0 224c0 17.7 14.3 32 32 32h64v-96H96zm128-224v128h128V192zm352 80c-.1-26.5-21.5-47.9-48-47.9s-48 21.5-48 48V320h112c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48v-96c0-20.9 13.4-38.7 32-45.3v-50.6c0-44.2 35.8-80 80-80s79.9 35.8 80 79.9zm-96 80.1h-17.7c-8 .9-14.3 7.7-14.3 15.9v96c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-48v.1z"})
);

export default LanTableCellsUnlock;
