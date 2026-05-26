import React from 'react';

export const LanCowbellCirclePlusSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M216 32h80c4.4 0 8 3.6 8 8v24h-96V40c0-4.4 3.6-8 8-8m-56 8v24c-28.5.6-53.3 20-60.6 47.7l-66 251c-.9 3.5-1.4 7.2-1.4 10.8C32 397 51 416 74.5 416h166.2c-.4-5.3-.7-10.6-.7-16 0-106 86-192 192-192 2 0 4 0 5.9.1l-25.4-96.4C405.3 84 380.5 64.6 352 64V40c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56m17.6 424c7.4 36.5 39.7 64 78.4 64 10 0 19.6-1.8 28.4-5.2-14.4-17.3-25.8-37.2-33.5-58.8zM432 544a144 144 0 1 0 0-288 144 144 0 1 0 0 288m16-208v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16"})
);

export default LanCowbellCirclePlusSolid;
