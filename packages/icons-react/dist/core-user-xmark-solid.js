import React from 'react';

export const CoreUserXmarkSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 320c88.4 0 160 71.6 160 160v32H0v-32c0-88.4 71.6-160 160-160zm351.7-152.1L583.6 224l56.1 56.1-39.6 39.6-56.1-56.1-56.1 56.1-39.6-39.6 56.1-56.1-56.1-56.1 39.6-39.6 56.1 56.1 56.1-56.1zM224 256a128 128 0 1 1 0-256 128 128 0 1 1 0 256"})
);

export default CoreUserXmarkSolid;
