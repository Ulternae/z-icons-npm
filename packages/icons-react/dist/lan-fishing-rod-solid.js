import React from 'react';

export const LanFishingRodSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M328 136v-16c0-39.8-32.2-72-72-72-92.8 0-168 75.2-168 168v72h8c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32h8v-72C40 96.7 136.7 0 256 0c66.3 0 120 53.7 120 120v16c0 13.3-10.7 24-24 24s-24-10.7-24-24m-72 208c0-71.6 55.6-127.8 89-148.1 4.3-2.6 9.6-2.6 14 0 33.5 20.3 89 76.6 89 148.1 0 32-16 80-64 112l27.3 27.3c3 3 4.7 7.1 4.7 11.3v1.4c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16v-1.4c0-4.2 1.7-8.3 4.7-11.3L320 456c-48-32-64-80-64-112m128-32a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanFishingRodSolid;
