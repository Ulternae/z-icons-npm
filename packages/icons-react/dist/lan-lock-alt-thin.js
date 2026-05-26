import React from 'react';

export const LanLockAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192-16c61.9 0 112 50.1 112 112v64H80V96c0-61.8 50.1-112 112-112M64 96v64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64V96c0-70.7-57.3-128-128-128S64 25.3 64 96M16 224c0-26.5 21.5-48 48-48h256c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm192 80v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16m-48 0v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32"})
);

export default LanLockAltThin;
