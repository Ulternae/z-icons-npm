import React from 'react';

export const LanFlashlightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M388.8 336H48c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32h340.8l4-2.7 31.5-21c31.2-20.8 66.7-33.9 103.6-38.5v284.4c-36.9-4.6-72.4-17.7-103.6-38.5l-31.5-21zm168.7 64c-4.5 0-9-.1-13.5-.4V112.4c4.5-.3 9-.4 13.5-.4H600c13.3 0 24 10.7 24 24v240c0 13.3-10.7 24-24 24zM0 208v96c0 26.5 21.5 48 48 48h336l31.5 21c42.1 28 91.5 43 142 43H600c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40h-42.5c-50.5 0-100 15-142 43L384 160H48c-26.5 0-48 21.5-48 48m256 32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16m-32 16c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32"})
);

export default LanFlashlightThin;
