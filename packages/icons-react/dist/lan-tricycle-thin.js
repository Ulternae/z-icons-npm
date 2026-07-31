import React from 'react';

export const LanTricycleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M296 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h65.4c21.3 0 38.6 17.3 38.6 38.6 0 13.1-6.7 25.3-17.7 32.4L162.7 260.8 94 144h26c4.4 0 8-3.6 8-8s-3.6-8-8-8H40c-4.4 0-8 3.6-8 8s3.6 8 8 8h35.4L144 260.6c-10.2-3-20.9-4.6-32-4.6C50.1 256 0 306.1 0 368s50.1 112 112 112 112-50.1 112-112c0-39.7-20.6-74.5-51.7-94.4L316 180.9l18.5 53.1c-46.1 19.4-78.5 64.9-78.5 118.1 0 70.7 57.3 128 128 128s128-57.3 128-128-57.3-128-128-128c-11.9 0-23.5 1.6-34.4 4.7l-19.7-56.7 61.2-39.5c15.6-10.1 25-27.3 25-45.9 0-30.2-24.4-54.6-54.6-54.6zm43.7 217.1 36.7 105.5c1.4 4.2 6 6.4 10.2 4.9s6.4-6 4.9-10.2l-36.7-105.5c9.3-2.5 19.1-3.8 29.2-3.8 61.9 0 112 50.1 112 112s-50.1 112-112 112-112-50.1-112-112c0-46.1 27.9-85.8 67.7-102.9M112 272a96 96 0 1 1 0 192 96 96 0 1 1 0-192"})
);

export default LanTricycleThin;
