import React from 'react';

export const LanSquareShekelThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm120 48h88c30.9 0 56 25.1 56 56v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-80c0-22.1-17.9-40-40-40h-80v200c0 4.4-3.6 8-8 8s-8-3.6-8-8V152c0-4.4 3.6-8 8-8m216 8v160c0 30.9-25.1 56-56 56h-88c-2.1 0-4.2-.8-5.7-2.3s-2.3-3.5-2.3-5.7V232c0-4.4 3.6-8 8-8s8 3.6 8 8v120h80c22.1 0 40-17.9 40-40V152c0-4.4 3.6-8 8-8s8 3.6 8 8"})
);

export default LanSquareShekelThin;
