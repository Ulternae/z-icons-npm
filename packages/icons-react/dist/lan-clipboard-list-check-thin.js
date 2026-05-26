import React from 'react';

export const LanClipboardListCheckThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 80h128c17.7 0 32-14.3 32-32s-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32m0 16c-26.5 0-48-21.5-48-48H64c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48h-16c0 26.5-21.5 48-48 48zM256 0c20.9 0 38.7 13.4 45.3 32H320c35.3 0 64 28.7 64 64v352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h18.7C89.3 13.4 107.1 0 128 0zm-72 200h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H184c-4.4 0-8-3.6-8-8s3.6-8 8-8m0 192h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H184c-4.4 0-8-3.6-8-8s3.6-8 8-8m-88 8c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16m16-176a16 16 0 1 1 0-32 16 16 0 1 1 0 32m52.1 41.8c3.4 2.8 4 7.8 1.2 11.3L120 333c-1.5 1.9-3.8 3-6.2 3s-4.7-1.1-6.2-3l-25-31.1c-2.8-3.5-2.2-8.5 1.2-11.2s8.5-2.2 11.2 1.2l18.7 23.3 39.1-48.3c2.8-3.4 7.8-4 11.3-1.2zM200 296h96c4.4 0 8 3.6 8 8s-3.6 8-8 8h-96c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
);

export default LanClipboardListCheckThin;
