import React from 'react';

export const LanFaceLaughThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256 160c66.4 0 122.4-45 139-106.2.4-1.3.1-2.4-.8-3.5-1.1-1.2-3-2.3-5.4-2.3H123.4c-2.4 0-4.4 1.1-5.4 2.3-.9 1.1-1.2 2.2-.8 3.5C133.8 371 189.8 416 256.2 416zM123.3 288h265.4c14.2 0 25.4 12.3 21.7 26-18.5 68-80.6 118-154.4 118s-136-50-154.4-118c-3.7-13.7 7.5-26 21.7-26m36.7-96a16 16 0 1 1 32 0 16 16 0 1 1-32 0m176-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"})
);

export default LanFaceLaughThin;
