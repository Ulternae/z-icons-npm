import React from 'react';

export const LanUserGroupSimpleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M464 224a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0-208a112 112 0 1 1 0 224 112 112 0 1 1 0-224m32 448c70.7 0 128-57.3 128-128v-8c0-13.3-10.7-24-24-24H351.1c-5.1-5.6-10.4-11-16.1-16h265c22.1 0 40 17.9 40 40v8c0 79.5-64.5 144-144 144h-64c-11.1 0-21.8-1.2-32.2-3.6.1-1.4.2-2.9.2-4.4v-12c10.2 2.6 21 4 32 4zM176 224a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0-208a112 112 0 1 1 0 224 112 112 0 1 1 0-224m-32 288c-70.7 0-128 57.3-128 128v40c0 4.4-3.6 8-8 8s-8-3.6-8-8v-40c0-79.5 64.5-144 144-144h64c79.5 0 144 64.5 144 144v40c0 4.4-3.6 8-8 8s-8-3.6-8-8v-40c0-70.7-57.3-128-128-128z"})
);

export default LanUserGroupSimpleThin;
