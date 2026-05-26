import React from 'react';

export const LanListDropdown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64h320c17.7 0 32 14.3 32 32v64H32V96c0-17.7 14.3-32 32-32M32 192h384v224c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zM0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96m112 160c-8.8 0-16 7.2-16 16s7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 96c-8.8 0-16 7.2-16 16s7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16zM312 92c-4.9 0-9.2 2.9-11.1 7.4s-.8 9.6 2.6 13.1l24 24c4.7 4.7 12.3 4.7 17 0l24-24c3.4-3.4 4.5-8.6 2.6-13.1S364.9 92 360 92z"})
);

export default LanListDropdown;
