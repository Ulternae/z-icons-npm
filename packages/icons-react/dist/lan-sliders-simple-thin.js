import React from 'react';

export const LanSlidersSimpleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 432a64 64 0 1 1 0-128 64 64 0 1 1 0 128m79.6-72c-4-40.4-38.1-72-79.6-72-44.2 0-80 35.8-80 80s35.8 80 80 80c41.5 0 75.6-31.6 79.6-72H504c4.4 0 8-3.6 8-8s-3.6-8-8-8zM496 144a64 64 0 1 1-128 0 64 64 0 1 1 128 0m-143.6-8H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h344.4c4 40.4 38.1 72 79.6 72 44.2 0 80-35.8 80-80s-35.8-80-80-80c-41.5 0-75.6 31.6-79.6 72"})
);

export default LanSlidersSimpleThin;
