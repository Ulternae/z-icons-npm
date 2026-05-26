import React from 'react';

export const LanHeartHalfAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M296.9 105.9c19-26.3 49.5-41.9 81.9-41.9 55.9 0 101.1 45.3 101.1 101.1 0 55-34.5 107.1-71.8 152.5-42.1 51.2-93.4 96-128.5 122.9-2.3 1.8-4.9 3.2-7.7 4.4V140.3l24.9-34.5zM240 140.3v304.6c-2.8-1.2-5.4-2.7-7.7-4.4-35.1-26.8-86.4-71.7-128.5-122.9C66.5 272.2 32 220.1 32 165.1 32 109.2 77.3 64 133.1 64c32.4 0 62.9 15.6 81.9 41.9zM378.9 32C336.2 32 296 52.5 271 87.1l-15 20.7-15-20.7C216 52.5 175.8 32 133.1 32 59.6 32 0 91.6 0 165.1 0 232.5 41.6 292.4 79.1 338c44.1 53.5 97.3 100 133.8 127.9 12.3 9.5 27.5 14.1 43.1 14.1s30.8-4.6 43.1-14.1c36.5-27.9 89.7-74.4 133.8-127.9 37.5-45.6 79.1-105.5 79.1-172.9C512 91.6 452.4 32 378.9 32"})
);

export default LanHeartHalfAlt;
