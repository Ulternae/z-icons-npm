import React from 'react';

export const LanHardDriveThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v213.7C27.7 296.4 44.9 288 64 288h320c19.1 0 36.3 8.4 48 21.7V96c0-26.5-21.5-48-48-48zM16 352v64c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48m-16 0V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm256 16a16 16 0 1 0 0 32 16 16 0 1 0 0-32m32 16a32 32 0 1 1-64 0 32 32 0 1 1 64 0m48 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64"})
);

export default LanHardDriveThin;
