import React from 'react';

export function LanFolderBlank({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 416h384c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32H298.7c-13.8 0-27.3-4.5-38.4-12.8l-38.4-28.8c-5.5-4.2-12.3-6.4-19.2-6.4H64c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32m384 32H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h138.7c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4H448c35.3 0 64 28.7 64 64v240c0 35.3-28.7 64-64 64"})
  );
}

export default LanFolderBlank;
