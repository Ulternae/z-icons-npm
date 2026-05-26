import React from 'react';

export const LanFolderPlus = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 384c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h138.7c6.9 0 13.7 2.2 19.2 6.4l38.4 28.8c11.1 8.3 24.6 12.8 38.4 12.8H448c17.7 0 32 14.3 32 32zM64 448h384c35.3 0 64-28.7 64-64V144c0-35.3-28.7-64-64-64H298.7c-6.9 0-13.7-2.2-19.2-6.4l-38.4-28.8C230 36.5 216.5 32 202.7 32H64C28.7 32 0 60.7 0 96v288c0 35.3 28.7 64 64 64m176-120c0 8.8 7.2 16 16 16s16-7.2 16-16v-56h56c8.8 0 16-7.2 16-16s-7.2-16-16-16h-56v-56c0-8.8-7.2-16-16-16s-16 7.2-16 16v56h-56c-8.8 0-16 7.2-16 16s7.2 16 16 16h56z"})
);

export default LanFolderPlus;
