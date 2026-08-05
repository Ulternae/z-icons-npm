import React from 'react';

export function LanSortSizeDownAltSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m230.6 390.6-80 80c-12.5 12.5-32.8 12.5-45.3 0l-80-80c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L96 370.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32v306.7l25.4-25.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3zM288 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48zm0 224c0-26.5 21.5-48 48-48h128c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48z"})
  );
}

export default LanSortSizeDownAltSolid;
