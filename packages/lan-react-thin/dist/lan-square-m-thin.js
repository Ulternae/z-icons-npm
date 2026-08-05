import React from 'react';

export function LanSquareMThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm142.5 67.3L224 274.5l81.5-111.2c2-2.8 5.7-3.9 8.9-2.9s5.5 4.1 5.5 7.6v176c0 4.4-3.6 8-8 8s-8-3.6-8-8V192.4l-73.5 100.3c-1.5 2.1-3.9 3.3-6.5 3.3s-4.9-1.2-6.5-3.3L144 192.4V344c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-3.5 2.2-6.5 5.5-7.6s6.9.1 8.9 2.9z"})
  );
}

export default LanSquareMThin;
