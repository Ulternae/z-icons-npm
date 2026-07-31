import React from 'react';

export const LanAnchorCircleExclamationRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 48a40 40 0 1 0 0 80 40 40 0 1 0 0-80m-88 40c0-48.6 39.4-88 88-88s88 39.4 88 88c0 40.3-27.1 74.2-64 84.7V345c-5.2 17.4-8 35.9-8 55 0 33.4 8.5 64.8 23.5 92.1-12.8 2.6-26 3.9-39.5 3.9-110.5 0-200-89.5-200-200v-11.1l-24.2 21.2c-10 8.7-25.1 7.7-33.9-2.3s-7.7-25.1 2.3-33.9l64-56c9-7.9 22.6-7.9 31.6 0l64 56c10 8.7 11 23.9 2.3 33.9s-23.9 11-33.9 2.3L136 284.9V296c0 75.8 55.5 138.6 128 150.1V172.7c-36.9-10.4-64-44.4-64-84.7m296 168a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 228a20 20 0 1 0 0-40 20 20 0 1 0 0 40m0-180c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80c0-8.8-7.2-16-16-16"})
);

export default LanAnchorCircleExclamationRegular;
