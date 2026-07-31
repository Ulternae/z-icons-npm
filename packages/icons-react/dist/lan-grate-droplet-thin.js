import React from 'react';

export const LanGrateDropletThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M440 48h40c26.5 0 48 21.5 48 48v84.6c5.5 1.2 10.8 3 16 5.3v-90c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h193.1c-1.8-5.2-3.4-10.6-4.7-16H328V264h79.7c3.9-5.5 7.8-10.9 11.7-16h-91.3V48h96v193.9c5.5-7.2 10.9-13.8 16-20zm-128 0v200h-96V48zm-112 0v200h-88V96c0-26.5 21.5-48 48-48zm-88 216h88v200h-40c-26.5 0-48-21.5-48-48zm104 200V264h96v200zm192-37.9c0-30 14.2-64.6 34.1-97.6 19.6-32.7 43.6-61.9 60.5-81 5.2-5.9 13.7-5.9 18.9 0 16.9 19.1 40.9 48.3 60.5 81 19.9 33.1 34.1 67.6 34.1 97.6 0 56-46.3 101.9-104 101.9S408 482.1 408 426.1M512 544c66.3 0 120-52.8 120-117.9 0-68.9-64.1-150.4-98.6-189.3-11.6-13.1-31.3-13.1-42.9 0-34.5 38.9-98.6 120.4-98.6 189.3 0 65.1 53.7 117.9 120 117.9z"})
);

export default LanGrateDropletThin;
