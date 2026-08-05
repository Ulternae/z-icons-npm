import React from 'react';

export function LanSkullThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M406.4 414.6C461.3 373.3 496 310.3 496 240c0-122.8-106.5-224-240-224S16 117.2 16 240c0 70.3 34.7 133.3 89.6 174.6 4 3 6.4 7.8 6.4 12.8V464c0 17.7 14.3 32 32 32h40v-40c0-4.4 3.6-8 8-8s8 3.6 8 8v40h48v-40c0-4.4 3.6-8 8-8s8 3.6 8 8v40h48v-40c0-4.4 3.6-8 8-8s8 3.6 8 8v40h40c17.7 0 32-14.3 32-32v-36.6c0-5 2.4-9.8 6.4-12.8M184 512h-40c-26.5 0-48-21.5-48-48v-36.6C37.5 383.4 0 315.8 0 240 0 107.5 114.6 0 256 0s256 107.5 256 240c0 75.8-37.5 143.4-96 187.4V464c0 26.5-21.5 48-48 48zm24-256a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-112 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m256 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128"})
  );
}

export default LanSkullThin;
