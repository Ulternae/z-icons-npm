import React from 'react';

export const LanCircleRubleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-64-376v136h-40c-4.4 0-8 3.6-8 8s3.6 8 8 8h40v32h-40c-4.4 0-8 3.6-8 8s3.6 8 8 8h40v40c0 4.4 3.6 8 8 8s8-3.6 8-8v-40h88c4.4 0 8-3.6 8-8s-3.6-8-8-8h-88v-32h80c44.2 0 80-35.8 80-80s-35.8-80-80-80h-88c-4.4 0-8 3.6-8 8m96 136h-80V144h80c35.3 0 64 28.7 64 64s-28.7 64-64 64"})
);

export default LanCircleRubleThin;
