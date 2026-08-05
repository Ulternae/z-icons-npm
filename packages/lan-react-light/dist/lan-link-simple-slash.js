import React from 'react';

export function LanLinkSimpleSlash({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.85 576 575.9',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M27.3-27.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l544 544c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L478 423.5c58.5-32.9 98-95.6 98-167.5 0-106-86-192-192-192h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c88.4 0 160 71.6 160 160 0 63.1-36.6 117.7-89.7 143.8L326.5 272H400c8.8 0 16-7.2 16-16s-7.2-16-16-16H294.5L154.8 100.3c12-2.8 24.4-4.3 37.2-4.3h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48c-22 0-43.2 3.7-62.9 10.5zM0 256c0 106 86 192 192 192h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48c-88.4 0-160-71.6-160-160 0-45.6 19.1-86.7 49.6-115.8L59 117.5C22.6 152.5 0 201.6 0 256"})
  );
}

export default LanLinkSimpleSlash;
