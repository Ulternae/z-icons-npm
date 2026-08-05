import React from 'react';

export function LanPenNibSlashRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.95 576 576.1',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L411.3 345.6l32.9-120.5 10.4-10.4 71-71c21.9-21.9 21.9-57.3 0-79.2l-46-46.2c-21.9-21.9-57.3-21.9-79.2 0l-71 71.1L319 99.8l-120.5 32.8zm196.6 196.6 91.3-24.9 68.3 68.3-24.9 91.3zm73.9 209.5-185.7 65.3 97.5-97.5c5.2 1.9 10.8 3 16.7 3 11.8 0 22.6-4.2 30.9-11.3l-67.6-67.6c-7 8.3-11.3 19.1-11.3 30.9 0 5.9 1.1 11.5 3 16.7l-97.5 97.5 65.2-185.6-37.6-37.7L39 440c-6.5 18.5-1.8 39.1 12 52.9s34.4 18.5 52.9 12L349 418.8l-37.6-37.7z"})
  );
}

export default LanPenNibSlashRegular;
