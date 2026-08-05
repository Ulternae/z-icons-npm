import React from 'react';

export function LanUserPlus({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M304 304c97.2 0 176 78.8 176 176v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-79.5-64.5-144-144-144h-96c-79.5 0-144 64.5-144 144v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-97.2 78.8-176 176-176zM528 88c8.8 0 16 7.2 16 16v56h56c8.8 0 16 7.2 16 16s-7.2 16-16 16h-56v56c0 8.8-7.2 16-16 16s-16-7.2-16-16v-56h-56c-8.8 0-16-7.2-16-16s7.2-16 16-16h56v-56c0-8.8 7.2-16 16-16M256 256a128 128 0 1 1 0-256 128 128 0 1 1 0 256m0-224a96 96 0 1 0 0 192 96 96 0 1 0 0-192"})
  );
}

export default LanUserPlus;
