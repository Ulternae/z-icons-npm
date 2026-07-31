import React from 'react';

export const LanTruckFlatbed = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M458.3 96c23.2 0 44.7 12.6 55.9 32.9l53.7 96.6c5 9 8.1 19.6 8.1 31.1V352c0 35.3-28.7 64-64 64h-3.3c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64H236.7c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64H48c-26.5 0-48-21.5-48-48v-80c0-26.5 21.5-48 48-48h304V128c0-17.7 14.3-32 32-32zM384 240h155.4l-53.1-95.5c-5.6-10.2-16.3-16.5-28-16.5H384zm160 32H48c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16h16.4c4-44.9 41.7-80 87.6-80s83.6 35.1 87.6 80h96.7c4-44.9 41.7-80 87.6-80s83.6 35.1 87.6 80h.4c17.7 0 32-14.3 32-32v-80zM208 392a56 56 0 1 0-112 0 56 56 0 1 0 112 0m216 56a56 56 0 1 0 0-112 56 56 0 1 0 0 112"})
);

export default LanTruckFlatbed;
