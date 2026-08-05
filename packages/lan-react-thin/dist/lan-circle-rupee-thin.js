import React from 'react';

export function LanCircleRupeeThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512M136 160c-4.4 0-8 3.6-8 8v192c0 4.4 3.6 8 8 8s8-3.6 8-8v-72h56c.9 0 1.7 0 2.6-.1l30 75c1.6 4.1 6.3 6.1 10.4 4.5s6.1-6.3 4.5-10.4l-28.7-71.8c26.2-8 45.3-32.4 45.3-61.2 0-35.3-28.7-64-64-64h-64zm64 112h-56v-96h56c26.5 0 48 21.5 48 48s-21.5 48-48 48m96-20.8c0 20.6 14.5 38.3 34.7 42.3l23.5 4.7c12.7 2.5 21.8 13.7 21.8 26.6 0 15-12.2 27.2-27.2 27.2H312c-4.4 0-8 3.6-8 8s3.6 8 8 8h36.8c23.8 0 43.2-19.3 43.2-43.2 0-20.6-14.5-38.3-34.7-42.3l-23.5-4.7c-12.7-2.5-21.8-13.7-21.8-26.6 0-15 12.2-27.2 27.2-27.2H376c4.4 0 8-3.6 8-8s-3.6-8-8-8h-36.8c-23.8 0-43.2 19.3-43.2 43.2"})
  );
}

export default LanCircleRupeeThin;
