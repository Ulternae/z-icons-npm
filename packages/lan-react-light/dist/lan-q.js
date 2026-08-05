import React from 'react';

export function LanQ({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 256c0 106 86 192 192 192 42.6 0 81.9-13.9 113.8-37.3L227.9 282.4c-5.8-6.7-5-16.8 1.7-22.6s16.8-5 22.6 1.7l109.7 128C395.4 355 416 307.9 416 256c0-106-86-192-192-192S32 150 32 256m326.7 179c-37.5 28.3-84.2 45-134.7 45C100.3 480 0 379.7 0 256S100.3 32 224 32s224 100.3 224 224c0 61.7-24.9 117.5-65.2 158l61.4 71.6c5.8 6.7 5 16.8-1.7 22.6s-16.8 5-22.6-1.7z"})
  );
}

export default LanQ;
