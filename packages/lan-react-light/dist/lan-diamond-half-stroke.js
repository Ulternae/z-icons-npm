import React from 'react';

export function LanDiamondHalfStroke({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M17 297C6.1 286.1 0 271.4 0 256s6.1-30.1 17-41L215 17c10.9-10.9 25.6-17 41-17s30.1 6.1 41 17l198 198c10.9 10.9 17 25.6 17 41s-6.1 30.1-17 41L297 495c-10.9 10.9-25.6 17-41 17s-30.1-6.1-41-17zM272 37.5v437c.8-.6 1.6-1.3 2.3-2.1l198.1-198.1c4.9-4.9 7.6-11.5 7.6-18.3s-2.7-13.5-7.6-18.3L274.3 39.6c-.7-.7-1.5-1.4-2.3-2.1m-32 437v-437c-.8.6-1.6 1.3-2.3 2.1L39.6 237.7c-4.9 4.8-7.6 11.4-7.6 18.3s2.7 13.5 7.6 18.3l198.1 198.1c.7.7 1.5 1.4 2.3 2.1"})
  );
}

export default LanDiamondHalfStroke;
