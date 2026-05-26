import React from 'react';

export const LanSkeletonThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 0c4.4 0 8 3.6 8 8v104h168c4.4 0 8 3.6 8 8s-3.6 8-8 8H264v80h232c4.4 0 8 3.6 8 8s-3.6 8-8 8H264v80h136c4.4 0 8 3.6 8 8s-3.6 8-8 8H264v96h80c39.8 0 72 32.2 72 72v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16c0-30.9-25.1-56-56-56H168c-30.9 0-56 25.1-56 56v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16c0-39.8 32.2-72 72-72h80v-96H112c-4.4 0-8-3.6-8-8s3.6-8 8-8h136v-80H16c-4.4 0-8-3.6-8-8s3.6-8 8-8h232v-80H80c-4.4 0-8-3.6-8-8s3.6-8 8-8h168V8c0-4.4 3.6-8 8-8"})
);

export default LanSkeletonThin;
