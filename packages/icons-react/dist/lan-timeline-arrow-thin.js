import React from 'react';

export const LanTimelineArrowThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M152 88a56 56 0 1 0-112 0 56 56 0 1 0 112 0m16 0c0 37.1-28 67.6-64 71.6V256h240v-96.4c-36-4-64-34.5-64-71.6 0-39.8 32.2-72 72-72s72 32.2 72 72c0 37.1-28 67.6-64 71.6V256h188.7l-58.3-58.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l72 72c3.1 3.1 3.1 8.2 0 11.3l-72 72c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l58.3-58.3H232v80h-16v-80H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h80v-96.4c-36-4-64-34.5-64-71.6 0-39.8 32.2-72 72-72s72 32.2 72 72zm56 408a72 72 0 1 1 0-144 72 72 0 1 1 0 144m128-352a56 56 0 1 0 0-112 56 56 0 1 0 0 112m-72 280a56 56 0 1 0-112 0 56 56 0 1 0 112 0"})
);

export default LanTimelineArrowThin;
