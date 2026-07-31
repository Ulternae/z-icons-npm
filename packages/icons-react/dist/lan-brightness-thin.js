import React from 'react';

export const LanBrightnessThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M248 104c0 4.4 3.6 8 8 8s8-3.6 8-8V8c0-4.4-3.6-8-8-8s-8 3.6-8 8zm8 72a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 176a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0 160c4.4 0 8-3.6 8-8v-96c0-4.4-3.6-8-8-8s-8 3.6-8 8v96c0 4.4 3.6 8 8 8M0 256c0 4.4 3.6 8 8 8h96c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8m408-8c-4.4 0-8 3.6-8 8s3.6 8 8 8h96c4.4 0 8-3.6 8-8s-3.6-8-8-8zM75 437c3.1 3.1 8.2 3.1 11.3 0l67.9-67.9c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L75 425.7c-3.1 3.1-3.1 8.2 0 11.3m282.8-294.1c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L437 86.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0zM75 75c-3.1 3.1-3.1 8.2 0 11.3l67.9 67.9c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L86.3 75c-3.1-3.1-8.2-3.1-11.3 0m294.1 282.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l67.9 67.9c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3z"})
);

export default LanBrightnessThin;
