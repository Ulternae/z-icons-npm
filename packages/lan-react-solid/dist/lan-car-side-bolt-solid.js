import React from 'react';

export function LanCarSideBoltSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48.6 193.9 86.5 85.6C97.8 53.5 128.1 32 162.1 32H360c25.2 0 48.9 11.9 64 32l96.2 128.3C587.1 196.5 640 252.1 640 320v16c0 35.3-28.7 64-64 64h-16.4c-4 44.9-41.7 80-87.6 80s-83.6-35.1-87.6-80H239.7c-4 44.9-41.7 80-87.6 80s-83.6-35.1-87.6-80h-.4c-35.3 0-64-28.7-64-64v-80c0-30.1 20.7-55.3 48.6-62.1zM152 432a40 40 0 1 0 0-80 40 40 0 1 0 0 80m360-40a40 40 0 1 0-80 0 40 40 0 1 0 80 0M200.5 224H246l-24.4 78c-2.8 8.9 3.9 18 13.2 18 3.3 0 6.6-1.2 9.1-3.4l110.4-95.7c3.6-3.1 5.7-7.7 5.7-12.5 0-9.1-7.4-16.5-16.5-16.5H298l24.4-78c2.8-8.9-3.9-18-13.2-18-3.3 0-6.6 1.2-9.1 3.4l-110.4 95.8c-3.6 3.1-5.7 7.7-5.7 12.5 0 9.1 7.4 16.5 16.5 16.5z"})
  );
}

export default LanCarSideBoltSolid;
