import React from 'react';

export const LanPodiumSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M168 72c-22.1 0-40 17.9-40 40v32h280c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24s10.7-24 24-24h40v-32c0-48.6 39.4-88 88-88h14.4C190.7 9.7 206.2 0 224 0h64c26.5 0 48 21.5 48 48s-21.5 48-48 48h-64c-17.8 0-33.3-9.7-41.6-24zM74.9 453.5 56.3 240h335.4l-18.6 213.5c-2.9 33.1-30.6 58.5-63.8 58.5H138.7c-33.2 0-60.9-25.4-63.8-58.5"})
);

export default LanPodiumSolid;
