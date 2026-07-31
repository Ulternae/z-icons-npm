import React from 'react';

export const LanFolderUser = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 416H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h138.7c6.9 0 13.7 2.2 19.2 6.4l38.4 28.8c11.1 8.3 24.6 12.8 38.4 12.8H448c17.7 0 32 14.3 32 32v240c0 17.7-14.3 32-32 32M64 448h384c35.3 0 64-28.7 64-64V144c0-35.3-28.7-64-64-64H298.7c-6.9 0-13.7-2.2-19.2-6.4l-38.4-28.8C230 36.5 216.5 32 202.7 32H64C28.7 32 0 60.7 0 96v288c0 35.3 28.7 64 64 64m160-224a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0M166.6 384c7.3 0 13.5-4.8 17.6-10.8 8.6-12.8 23.2-21.2 39.8-21.2h64c16.6 0 31.2 8.4 39.8 21.2 4.1 6 10.3 10.8 17.6 10.8 10.8 0 19-10.1 14.2-19.8C346.5 338 319.4 320 288 320h-64c-31.3 0-58.4 18-71.6 44.2-4.9 9.7 3.3 19.8 14.2 19.8"})
);

export default LanFolderUser;
