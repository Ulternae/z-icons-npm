import React from 'react';

export const LanMoonStarsThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M456-24v48h48c4.4 0 8 3.6 8 8s-3.6 8-8 8h-48v48c0 4.4-3.6 8-8 8s-8-3.6-8-8V40h-48c-4.4 0-8-3.6-8-8s3.6-8 8-8h48v-48c0-4.4 3.6-8 8-8s8 3.6 8 8M270.1 85.1C255.2 81.8 239.8 80 224 80 109.1 80 16 173.1 16 288s93.1 208 208 208c55.9 0 106.7-22.1 144.1-58 1.5-1.5 2-3.7 1.1-5.7s-2.9-3.1-5-2.9l-1.3-16c8.8-.7 17.2 4.2 20.8 12.3s1.8 17.6-4.6 23.8C338.9 488.2 284.2 512 224 512 100.3 512 0 411.7 0 288S100.3 64 224 64c17 0 33.6 1.9 49.6 5.5 8.7 2 15.2 9.2 16.2 18s-3.5 17.3-11.5 21.3c-53 26.4-89.3 81.1-89.3 144.2 0 88.9 72.1 161 161 161 4.4 0 8.7-.2 12.9-.5l1.3 16c-4.7.4-9.4.6-14.2.6-97.8 0-177-79.2-177-177 0-69.4 40-129.5 98.2-158.5 1.9-.9 3-3 2.7-5.1s-1.8-3.8-3.9-4.3zM384 144c4.4 0 8 3.6 8 8v80h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8h80v-80c0-4.4 3.6-8 8-8"})
);

export default LanMoonStarsThin;
