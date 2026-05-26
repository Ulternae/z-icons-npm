import React from 'react';

export const LanTruckFrontRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 80c-17.7 0-32 14.3-32 32v118.7c9.8-4.3 20.6-6.7 32-6.7v-32c0-44.2 35.8-80 80-80h128c44.2 0 80 35.8 80 80v32c11.4 0 22.2 2.4 32 6.7V112c0-17.7-14.3-32-32-32zm48 144h192v-32c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32zm-48 48c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zm368-160v256c0 26.2-12.6 49.4-32 64v56c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40H80v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-56c-19.4-14.6-32-37.8-32-64V112c0-44.2 35.8-80 80-80h288c44.2 0 80 35.8 80 80M100 336a28 28 0 1 1 56 0 28 28 0 1 1-56 0m220-28a28 28 0 1 1 0 56 28 28 0 1 1 0-56"})
);

export default LanTruckFrontRegular;
