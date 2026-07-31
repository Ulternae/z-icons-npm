import React from 'react';

export const LanTableTreeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm320 128v256H64V160h48v160c0 30.9 25.1 56 56 56h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48c-4.4 0-8-3.6-8-8v-40.6c2.6.4 5.3.6 8 .6h16c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16c-4.4 0-8-3.6-8-8v-64zm-128 80v32c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16m48 80c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"})
);

export default LanTableTreeSolid;
