import React from 'react';

export const LanPlaneCircleXmarkThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -24 640 568.045',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M232 32c0-30.9 25.1-56 56-56s56 25.1 56 56v108.5l86.3 79.1c-5.5 2-11 4.3-16.3 6.8l-70-64.2v120.5c-5.9 7.7-11.3 15.8-16 24.3V32c0-22.1-17.9-40-40-40s-40 17.9-40 40v392c0 2.4-1.1 4.7-3 6.2l-77 61.6v33.9l118.1-29.5q1.95-.45 3.9 0l47.3 11.8c4.9 7.2 10.3 14.1 16.2 20.5L288 512.2l-126.1 31.6c-2.4.6-4.9.1-6.9-1.5s-3.1-3.8-3.1-6.3v-48c0-2.4 1.1-4.7 3-6.2l77-61.6v-73.1L50.4 407.6c-2.4.8-5.1.4-7.2-1.1S40 402.6 40 400v-80c0-2.2.9-4.4 2.6-5.9L232 140.5zM56 323.5v65.4l176-58.7v-168zM624 400a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-272 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m197.7-42.3L507.4 400l42.3 42.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-42.3-42.3-42.3 42.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l42.3-42.3-42.3-42.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l42.3 42.3 42.3-42.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3"})
);

export default LanPlaneCircleXmarkThin;
