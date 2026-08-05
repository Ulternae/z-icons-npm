import React from 'react';

export function LanDesktopSlashSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.95 576 576.1',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L481.8 416c34.5-1 62.2-29.2 62.2-64V96c0-35.3-28.7-64-64-64H97.8zM161.8 96H480v256h-62.2zM282 352H96V166l-64-64v250c0 35.3 28.7 64 64 64h144l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c5.1 0 9.8-1.6 13.7-4.3L394 464h-42l-16-48h10z"})
  );
}

export default LanDesktopSlashSolid;
