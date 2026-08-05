import React from 'react';

export function LanCarSirenSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M312 64h48.9c42 0 79.1 27.3 91.6 67.4l23 73.5c21.9 14.3 36.4 39 36.4 67.1v176c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32h-320v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32L0 272c0-28.1 14.5-52.9 36.4-67.1l23-73.5C71.9 91.3 109.1 64 151.1 64H200l6.3-25.2C212 16 232.5 0 256 0s44 16 49.7 38.8zm-160.9 64c-14 0-26.4 9.1-30.5 22.5l-13 41.5h296.9l-13-41.5C387.3 137.1 375 128 361 128zM96 336a32 32 0 1 0 0-64 32 32 0 1 0 0 64m352-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0"})
  );
}

export default LanCarSirenSolid;
