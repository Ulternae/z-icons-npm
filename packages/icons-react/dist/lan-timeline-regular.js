import React from 'react';

export const LanTimelineRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m24 108.3c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S48 51.8 48 96c0 35.8 23.5 66.1 56 76.3V232H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h240v59.7c-32.5 10.2-56 40.5-56 76.3 0 44.2 35.8 80 80 80s80-35.8 80-80c0-35.8-23.5-66.1-56-76.3V280h240c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80v-59.7c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80s-80 35.8-80 80c0 35.8 23.5 66.1 56 76.3V232H152zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64M416 96a32 32 0 1 1 64 0 32 32 0 1 1-64 0"})
);

export default LanTimelineRegular;
