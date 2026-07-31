import React from 'react';

export const LanTimeline = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 48a48 48 0 1 1 0 96 48 48 0 1 1 0-96m16 126.4c36.5-7.4 64-39.7 64-78.4 0-44.2-35.8-80-80-80S48 51.8 48 96c0 38.7 27.5 71 64 78.4V256H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h256v49.6c-36.5 7.4-64 39.7-64 78.4 0 44.2 35.8 80 80 80s80-35.8 80-80c0-38.7-27.5-71-64-78.4V288h256c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96v-81.6c36.5-7.4 64-39.7 64-78.4 0-44.2-35.8-80-80-80s-80 35.8-80 80c0 38.7 27.5 71 64 78.4V256H144zM400 96a48 48 0 1 1 96 0 48 48 0 1 1-96 0M288 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96"})
);

export default LanTimeline;
