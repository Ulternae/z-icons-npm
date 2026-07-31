import React from 'react';

export const LanCircleFrancThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-64-376v152h-24c-4.4 0-8 3.6-8 8s3.6 8 8 8h24v72c0 4.4 3.6 8 8 8s8-3.6 8-8v-72h72c4.4 0 8-3.6 8-8s-3.6-8-8-8h-72v-48h88c4.4 0 8-3.6 8-8s-3.6-8-8-8h-88v-80h136c4.4 0 8-3.6 8-8s-3.6-8-8-8H200c-4.4 0-8 3.6-8 8"})
);

export default LanCircleFrancThin;
