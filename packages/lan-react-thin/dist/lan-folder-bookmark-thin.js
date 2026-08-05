import React from 'react';

export function LanFolderBookmarkThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 432c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-16v184c0 3-1.6 5.7-4.2 7.1s-5.8 1.2-8.2-.4l-67.6-45-67.6 45c-2.5 1.6-5.6 1.8-8.2.4S272 283 272 280V87.9l-2.1-1.5-38.4-28.8c-8.3-6.2-18.4-9.6-28.8-9.6H64c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48zM424 80h24c35.3 0 64 28.7 64 64v240c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h138.7c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4zm-8 16H298.7c-3.6 0-7.2-.4-10.7-1.2v170.3l59.6-39.7c2.7-1.8 6.2-1.8 8.9 0l59.5 39.7z"})
  );
}

export default LanFolderBookmarkThin;
