import React from 'react';

export function LanPodiumRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M182.4 72H168c-22.1 0-40 17.9-40 40v32h280c13.3 0 24 10.7 24 24s-10.7 24-24 24h-12.2l-22.7 261.5c-2.9 33.1-30.6 58.5-63.8 58.5H138.7c-33.2 0-60.9-25.4-63.8-58.5L52.2 192H40c-13.3 0-24-10.7-24-24s10.7-24 24-24h40v-32c0-48.6 39.4-88 88-88h14.4C190.7 9.7 206.2 0 224 0h64c26.5 0 48 21.5 48 48s-21.5 48-48 48h-64c-17.8 0-33.3-9.7-41.6-24m-82 120 22.4 257.4c.7 8.3 7.6 14.6 15.9 14.6h170.6c8.3 0 15.2-6.3 15.9-14.6L347.6 192H100.3z"})
  );
}

export default LanPodiumRegular;
