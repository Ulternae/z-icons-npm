import React from 'react';

export const LanSquareDashedCirclePlusThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M120 32h16c4.4 0 8 3.6 8 8s-3.6 8-8 8h-16c-39.8 0-72 32.2-72 72v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16c0-48.6 39.4-88 88-88M40 192c4.4 0 8 3.6 8 8v112c0 4.4-3.6 8-8 8s-8-3.6-8-8V200c0-4.4 3.6-8 8-8m8 184v16c0 39.8 32.2 72 72 72h130.9c1.9 5.4 4.1 10.8 6.5 16H120c-48.6 0-88-39.4-88-88v-16c0-4.4 3.6-8 8-8s8 3.6 8 8m432-256v94c-5.3-1.4-10.6-2.5-16-3.4v-90.7c0-39.8-32.2-72-72-72h-16c-4.4 0-8-3.6-8-8s3.6-8 8-8h16c48.6 0 88 39.4 88 88zM320 40c0 4.4-3.6 8-8 8H200c-4.4 0-8-3.6-8-8s3.6-8 8-8h112c4.4 0 8 3.6 8 8m240 360a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-272 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m152-64v56h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8s3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8s8 3.6 8 8"})
);

export default LanSquareDashedCirclePlusThin;
