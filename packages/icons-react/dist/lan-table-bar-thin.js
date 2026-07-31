import React from 'react';

export const LanTableBarThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M368 32c44.2 0 80 35.8 80 80v48c0 17.7-14.3 32-32 32H232v272h104c4.4 0 8 3.6 8 8s-3.6 8-8 8H112c-4.4 0-8-3.6-8-8s3.6-8 8-8h104V192H32c-17.7 0-32-14.3-32-32v-48c0-41.4 31.5-75.5 71.8-79.6L80 32zM80 48c-35.3 0-64 28.7-64 64v48c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16v-48c0-35.3-28.7-64-64-64z"})
);

export default LanTableBarThin;
