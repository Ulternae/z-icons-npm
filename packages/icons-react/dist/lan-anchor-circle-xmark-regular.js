import React from 'react';

export const LanAnchorCircleXmarkRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 48a40 40 0 1 0 0 80 40 40 0 1 0 0-80m-88 40c0-48.6 39.4-88 88-88s88 39.4 88 88c0 40.3-27.1 74.2-64 84.7V345c-5.2 17.4-8 35.9-8 55 0 33.4 8.5 64.8 23.5 92.1-12.8 2.6-26 3.9-39.5 3.9-110.5 0-200-89.5-200-200v-11.1l-24.2 21.2c-10 8.7-25.1 7.7-33.9-2.3s-7.7-25.1 2.3-33.9l64-56c9-7.9 22.6-7.9 31.6 0l64 56c10 8.7 11 23.9 2.3 33.9s-23.9 11-33.9 2.3L136 284.9V296c0 75.8 55.5 138.6 128 150.1V172.7c-36.9-10.4-64-44.4-64-84.7m296 168a144 144 0 1 1 0 288 144 144 0 1 1 0-288m59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L496 377.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l36.7 36.7-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l36.7-36.7 36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L518.6 400z"})
);

export default LanAnchorCircleXmarkRegular;
