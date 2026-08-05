import React from 'react';

export function LanAustralianDollarSignSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M408 16c13.3 0 24 10.7 24 24v24h16c17.7 0 32 14.3 32 32s-14.3 32-32 32h-48.9c-26 0-47.1 21.1-47.1 47.1 0 22.5 15.9 41.8 37.9 46.2l32.8 6.6c51.9 10.4 89.3 56 89.3 109 0 50.6-33.8 93.3-80 106.7V472c0 13.3-10.7 24-24 24s-24-10.7-24-24v-24h-48c-17.7 0-32-14.3-32-32s14.3-32 32-32h64.9c26 0 47.1-21.1 47.1-47.1 0-22.5-15.9-41.8-37.9-46.2l-32.8-6.6c-51.9-10.4-89.3-56-89.3-109 0-56.2 41.8-102.7 96-110.1V40c0-13.3 10.7-24 24-24M128 184.1 95.5 320h65zm64.9 271.3L175.8 384H80.2l-17.1 71.4c-4.1 17.2-21.4 27.8-38.6 23.7S-3.2 457.7.9 440.6L87 80.3c4.5-19 21.5-32.3 41-32.3s36.4 13.4 41 32.3l86.1 360.2c4.1 17.2-6.5 34.5-23.7 38.6s-34.5-6.5-38.6-23.7z"})
  );
}

export default LanAustralianDollarSignSolid;
