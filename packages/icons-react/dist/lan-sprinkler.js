import React from 'react';

export const LanSprinkler = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 0a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-64 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32M32 144a16 16 0 1 1-32 0 16 16 0 1 1 32 0m128 0a16 16 0 1 1-32 0 16 16 0 1 1 32 0m192 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0m144-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-64 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32M96 208a16 16 0 1 1-32 0 16 16 0 1 1 32 0m400 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32M32 272a16 16 0 1 1-32 0 16 16 0 1 1 32 0M96 80a16 16 0 1 1-32 0 16 16 0 1 1 32 0M32 16a16 16 0 1 1-32 0 16 16 0 1 1 32 0m224 48c8.8 0 16 7.2 16 16v176h120c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-89 89v86.1c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40V386l-89-89c-6.9-6.9-8.9-17.2-5.2-26.2S110.3 256 120 256h120V80c0-8.8 7.2-16 16-16M139.3 288l75.3 75.3c6 6 9.4 14.1 9.4 22.6V472c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-86.1c0-8.5 3.4-16.6 9.4-22.6l75.3-75.3z"})
);

export default LanSprinkler;
