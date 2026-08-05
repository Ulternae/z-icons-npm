import React from 'react';

export function LanSlashBackSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16.1 4.2C.8 13-4.5 32.5 4.2 47.9l256 448c8.8 15.3 28.3 20.7 43.7 11.9s20.7-28.3 11.9-43.7l-256-448C51 .8 31.5-4.6 16.1 4.2"})
  );
}

export default LanSlashBackSolid;
