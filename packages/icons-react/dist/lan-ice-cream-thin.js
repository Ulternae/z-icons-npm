import React from 'react';

export const LanIceCreamThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 160c0-79.5 64.5-144 144-144s144 64.5 144 144c0 8.2-.7 16.3-2 24.2-.7 4.2 2 8.2 6.2 9.1 25.1 5.5 43.9 27.9 43.9 54.7 0 30.9-25.1 56-56 56H88c-30.9 0-56-25.1-56-56 0-26.8 18.8-49.1 43.9-54.7 4.2-.9 6.9-4.9 6.2-9.1-1.3-7.9-2-15.9-2-24.2zM224 0C135.6 0 64 71.6 64 160c0 6.7.4 13.2 1.2 19.7C36.6 189.2 16 216.2 16 248c0 39.8 32.2 72 72 72h8l104.8 209.7c4.4 8.8 13.3 14.3 23.2 14.3s18.8-5.5 23.2-14.3L352 320h8c39.8 0 72-32.2 72-72 0-31.8-20.6-58.8-49.2-68.3.8-6.5 1.2-13 1.2-19.7C384 71.6 312.4 0 224 0m110.1 320L232.8 522.5c-1.7 3.4-5.1 5.5-8.8 5.5s-7.2-2.1-8.8-5.5L113.9 320z"})
);

export default LanIceCreamThin;
