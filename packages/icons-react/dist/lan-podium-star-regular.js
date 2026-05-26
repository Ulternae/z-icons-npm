import React from 'react';

export const LanPodiumStarRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M168 72h14.4c8.3 14.3 23.8 24 41.6 24h64c26.5 0 48-21.5 48-48S314.5 0 288 0h-64c-17.8 0-33.3 9.7-41.6 24H168c-48.6 0-88 39.4-88 88v32H40c-13.3 0-24 10.7-24 24s10.7 24 24 24h12.2l22.7 261.5c2.9 33.1 30.6 58.5 63.8 58.5h170.6c33.2 0 60.9-25.4 63.8-58.5L395.8 192H408c13.3 0 24-10.7 24-24s-10.7-24-24-24H128v-32c0-22.1 17.9-40 40-40m-45.3 377.4L100.3 192h247.3l-22.4 257.4c-.7 8.3-7.6 14.6-15.9 14.6H138.7c-8.3 0-15.2-6.3-15.9-14.6zm112-203.6c-4.4-8.9-17.1-8.9-21.5 0l-17.5 35.4-39 5.7c-9.8 1.4-13.8 13.5-6.7 20.5l28.2 27.5-6.7 38.9c-1.7 9.8 8.6 17.3 17.4 12.6L224 368l34.9 18.4c8.8 4.6 19.1-2.8 17.4-12.6l-6.7-38.9 28.2-27.5c7.1-6.9 3.2-19-6.7-20.5l-39-5.7-17.5-35.4z"})
);

export default LanPodiumStarRegular;
