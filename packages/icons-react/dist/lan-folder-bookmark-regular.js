import React from 'react';

export const LanFolderBookmarkRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M464 384c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16h138.7c3.5 0 6.8 1.1 9.6 3.2l38.4 28.8q2.7 2.1 5.7 3.9c-.2 1.3-.3 2.7-.3 4.1v150.2c0 9.8 8 17.8 17.8 17.8 4 0 7.9-1.4 11.1-3.9l35-28.1 35.1 28.1c3.2 2.5 7.1 3.9 11.1 3.9 9.8 0 17.8-8 17.8-17.8V128h64c8.8 0 16 7.2 16 16zM64 448h384c35.3 0 64-28.7 64-64V144c0-35.3-28.7-64-64-64H298.7c-6.9 0-13.7-2.2-19.2-6.4l-38.4-28.8C230 36.5 216.5 32 202.7 32H64C28.7 32 0 60.7 0 96v288c0 35.3 28.7 64 64 64"})
);

export default LanFolderBookmarkRegular;
