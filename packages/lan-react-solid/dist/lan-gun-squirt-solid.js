import React from 'react';

export function LanGunSquirtSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128 56c0-13.3-10.7-24-24-24S80 42.7 80 56v9.3C34.6 72.9 0 112.4 0 160c0 47.3 34.3 86.7 79.4 94.6L33 440.2c-2.4 9.6-.2 19.7 5.8 27.5S54.1 480 64 480h104c14.7 0 27.5-10 31-24.2l19.9-79.8h53v16c0 13.3 10.7 24 24 24s24-10.7 24-24v-80c0-13.3-10.7-24-24-24s-24 10.7-24 24v16h-41l18-72h199c41.8 0 77.4-26.7 90.5-64h13.5c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24h-13.5c-13-37.3-48.6-64-90.4-64H128zm-32 72h352c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32"})
  );
}

export default LanGunSquirtSolid;
