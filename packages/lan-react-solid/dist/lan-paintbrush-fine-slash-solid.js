import React from 'react';

export function LanPaintbrushFineSlashSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.95 576.05 576.1',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L366.2 300.3l191.1-191c25-25 25-65.5 0-90.5s-65.5-25-90.5 0l-191.1 191zM176 288c-61.9 0-112 50.1-112 112 0 3.9.2 7.8.6 11.6 1.8 17.5-10.2 36.4-27.8 36.4H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h144c61.9 0 112-50.1 112-112 0-21.6-6.1-41.8-16.7-58.9l-36.4-36.4C217.8 294.1 197.6 288 176 288"})
  );
}

export default LanPaintbrushFineSlashSolid;
