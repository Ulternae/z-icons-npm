import React from 'react';

export const BruLinktree = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M15.998 173.4h125.8L52.398 88l49.5-51 85.2 87.8V0h73.9v124.8l85.2-87.6 49.4 50.8-89.4 85.2h125.7v70.5h-126.4l90 87.6-49.3 49.8-122.2-123-122.2 123-49.5-49.6 90-87.6h-126.4v-70.5zm170.9 171.4h73.9V512h-73.9z"})
);

export default BruLinktree;
