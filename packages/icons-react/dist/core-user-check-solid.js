import React from 'react';

export const CoreUserCheckSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 320c88.4 0 160 71.6 160 160v32H0v-32c0-88.4 71.6-160 160-160zm343.6-144-19.8 19.8-112 112c-10.9 10.9-28.7 10.9-39.6 0L392.4 240l39.6-39.6 48 48 92.2-92.2 19.8-19.8zM224 256a128 128 0 1 1 0-256 128 128 0 1 1 0 256"})
);

export default CoreUserCheckSolid;
