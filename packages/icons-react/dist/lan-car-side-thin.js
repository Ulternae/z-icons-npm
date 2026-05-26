import React from 'react';

export const LanCarSideThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M171.3 48H224v144H75.8l43.5-108.8c8.5-21.3 29.1-35.2 52-35.2M240 192V48h112c17.6 0 34.2 8.3 44.8 22.4L488 192zm268 0L409.6 60.8C396 42.7 374.7 32 352 32H171.3c-29.4 0-55.9 17.9-66.9 45.3l-46 115C25.7 195 0 222.5 0 256v80c0 35.3 28.7 64 64 64h.4c4 44.9 41.7 80 87.6 80s83.6-35.1 87.6-80h144.7c4 44.9 41.7 80 87.6 80s83.6-35.1 87.6-80h16.4c35.3 0 64-28.7 64-64v-16c0-70.7-57.3-128-128-128h-4zm51.6 192c-4-44.9-41.7-80-87.6-80s-83.6 35.1-87.6 80H239.7c-4-44.9-41.7-80-87.6-80s-83.6 35.1-87.6 80h-.4c-26.5 0-48-21.5-48-48v-80c0-26.5 21.5-48 48-48h448c61.9 0 112 50.1 112 112v16c0 26.5-21.5 48-48 48h-16.4zM152 320a72 72 0 1 1 0 144 72 72 0 1 1 0-144m248 72a72 72 0 1 1 144 0 72 72 0 1 1-144 0"})
);

export default LanCarSideThin;
