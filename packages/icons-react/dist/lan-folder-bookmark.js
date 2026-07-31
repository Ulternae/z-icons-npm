import React from 'react';

export const LanFolderBookmark = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 384V144c0-17.7-14.3-32-32-32h-32v160c0 5.5-2.9 10.7-7.6 13.6s-10.6 3.2-15.6.7L336 257.9l-56.8 28.4c-5 2.5-10.9 2.2-15.6-.7s-7.6-8.1-7.6-13.6V96l-34.1-25.6c-5.5-4.2-12.3-6.4-19.2-6.4H64c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32M400 80h48c35.3 0 64 28.7 64 64v240c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h138.7c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4zm-16 32h-85.3c-3.6 0-7.2-.3-10.7-.9v135l40.8-20.4c4.5-2.3 9.8-2.3 14.3 0l40.9 20.4z"})
);

export default LanFolderBookmark;
