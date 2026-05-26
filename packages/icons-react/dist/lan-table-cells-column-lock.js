import React from 'react';

export const LanTableCellsColumnLock = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 64H128c-17.7 0-32 14.3-32 32v64h370c-14.6 8.1-27.5 19-37.9 32H384v122.8c-1.1 1.7-2.2 3.4-3.2 5.2H352V192H224v256h144v15.9c0 5.5.5 10.9 1.3 16.1H128c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v49c-11.2 1.4-21.9 4.2-32 8.3V96c0-17.7-14.3-32-32-32M192 192H96v224c0 17.7 14.3 32 32 32h64zm256 128.1v-48c0-44.2 35.8-80 80-80s80 35.8 80 80v50.6c18.6 6.6 32 24.4 32 45.3v96c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48v-96c0-20.9 13.4-38.7 32-45.3zm0 47.9v96c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-96c0-8.2-6.2-15-14.3-15.9H462.2c-8 .9-14.3 7.7-14.3 15.9zm128-95.9c0-26.5-21.5-48-48-48s-48 21.5-48 48V320h96z"})
);

export default LanTableCellsColumnLock;
