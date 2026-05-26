import React from 'react';

export const LanCircleR = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-48-352c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h40l43.2 57.6c5.3 7.1 15.3 8.5 22.4 3.2s8.5-15.3 3.2-22.4l-33.4-44.5C321 271.6 336 249.6 336 224c0-35.3-28.7-64-64-64zm64 96h-48v-64h48c17.7 0 32 14.3 32 32s-14.3 32-32 32"})
);

export default LanCircleR;
