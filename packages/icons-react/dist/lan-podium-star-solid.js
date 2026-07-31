import React from 'react';

export const LanPodiumStarSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M182.4 72H168c-22.1 0-40 17.9-40 40v32h280c13.3 0 24 10.7 24 24s-10.7 24-24 24h-12.2l-22.7 261.5c-2.9 33.1-30.6 58.5-63.8 58.5H138.7c-33.2 0-60.9-25.4-63.8-58.5L52.2 192H40c-13.3 0-24-10.7-24-24s10.7-24 24-24h40v-32c0-48.6 39.4-88 88-88h14.4C190.7 9.7 206.2 0 224 0h64c26.5 0 48 21.5 48 48s-21.5 48-48 48h-64c-17.8 0-33.3-9.7-41.6-24m52.3 197.8c-4.4-8.9-17.1-8.9-21.5 0l-17.5 35.4-39 5.7c-9.8 1.4-13.8 13.5-6.7 20.5l28.2 27.5-6.7 38.9c-1.7 9.8 8.6 17.3 17.4 12.6L224 392l34.9 18.4c8.8 4.6 19.1-2.8 17.4-12.6l-6.7-38.9 28.2-27.5c7.1-6.9 3.2-19-6.7-20.5l-39-5.7-17.5-35.4z"})
);

export default LanPodiumStarSolid;
