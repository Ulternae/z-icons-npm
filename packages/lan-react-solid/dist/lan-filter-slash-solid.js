import React from 'react';

export function LanFilterSlashSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.95 576 576.1',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L359.6 293.7l175-175.1c9.2-9.2 11.9-22.9 6.9-34.9S524.9 64 512 64H129.8zm183 326.2V416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S352 492.9 352 480v-58.2l-128-128v7.4z"})
  );
}

export default LanFilterSlashSolid;
