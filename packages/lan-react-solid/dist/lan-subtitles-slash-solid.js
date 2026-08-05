import React from 'react';

export function LanSubtitlesSlashSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.95 576 576.1',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-61.4-61.4c21.6-10.4 36.5-32.3 36.5-57.8V128c0-35.3-28.7-64-64-64H129.8zM401.8 336H456c13.3 0 24 10.7 24 24s-10.7 24-24 24h-6.2zM36 105.8c-2.6 6.9-4 14.4-4 22.2v256c0 35.3 28.7 64 64 64h282.2l-64-64H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h146.2l-48-48H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h50.2zM480 264c0 13.3-10.7 24-24 24h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64c13.3 0 24 10.7 24 24"})
  );
}

export default LanSubtitlesSlashSolid;
