import React from 'react';

export const LanSlidersVThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 0c4.4 0 8 3.6 8 8v88.5c31.6 3.9 56 30.9 56 63.5s-24.4 59.6-56 63.5V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V223.5C24.4 219.6 0 192.6 0 160s24.4-59.6 56-63.5V8c0-4.4 3.6-8 8-8m0 208a48 48 0 1 0 0-96 48 48 0 1 0 0 96m160 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96m64-48c0 32.6-24.4 59.6-56 63.5V504c0 4.4-3.6 8-8 8s-8-3.6-8-8v-88.5c-31.6-3.9-56-30.9-56-63.5s24.4-59.6 56-63.5V8c0-4.4 3.6-8 8-8s8 3.6 8 8v280.5c31.6 3.9 56 30.9 56 63.5m144-160a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-40 63.5V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V255.5c-31.6-3.9-56-30.9-56-63.5s24.4-59.6 56-63.5V8c0-4.4 3.6-8 8-8s8 3.6 8 8v120.5c31.6 3.9 56 30.9 56 63.5s-24.4 59.6-56 63.5"})
);

export default LanSlidersVThin;
