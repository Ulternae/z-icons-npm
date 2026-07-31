import React from 'react';

export const LanUserVneckHairThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M336 144c0 61.9-50.1 112-112 112s-112-50.1-112-112v-16h80.8c22 0 43.4-7 61.2-19.9l61.5-44.7C328.4 81.6 336 103.9 336 128zM224 16c32 0 60.9 13.4 81.3 35l-60.8 44.2c-15 10.9-33.2 16.8-51.8 16.8h-79.6c7.8-54.3 54.4-96 110.9-96m0-16C153.3 0 96 57.3 96 128v16c0 70.7 57.3 128 128 128s128-57.3 128-128v-16C352 57.3 294.7 0 224 0m-73.7 310.1c-1.9-2.3-4.9-3.5-7.8-2.9C61.3 322.9 0 394.3 0 480v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24c0-76.3 53.4-140.1 124.8-156.1l76.9 97.1c1.5 1.9 3.8 3 6.3 3s4.8-1.1 6.3-3l76.9-97.1C378.6 339.9 432 403.7 432 480v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24c0-85.7-61.3-157.2-142.5-172.8-2.9-.6-5.9.6-7.8 2.9l-73.7 93z"})
);

export default LanUserVneckHairThin;
