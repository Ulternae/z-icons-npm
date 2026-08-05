import React from 'react';

export function LanUserTimes({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M272 304c97.2 0 176 78.8 176 176v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-79.5-64.5-144-144-144h-96c-79.5 0-144 64.5-144 144v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-97.2 78.8-176 176-176zm-48-48a128 128 0 1 1 0-256 128 128 0 1 1 0 256m316.7-147.3c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L518.6 176l44.7 44.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L496 198.6l-44.7 44.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l44.7-44.7-44.7-44.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l44.7 44.7zM224 32a96 96 0 1 0 0 192 96 96 0 1 0 0-192"})
  );
}

export default LanUserTimes;
