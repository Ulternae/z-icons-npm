import React from 'react';

export const CoreUserPlusSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 320c88.4 0 160 71.6 160 160v32H0v-32c0-88.4 71.6-160 160-160zm284-124h68v56h-68v68h-56v-68h-68v-56h68v-68h56zm-348 60a128 128 0 1 1 0-256 128 128 0 1 1 0 256"})
);

export default CoreUserPlusSolid;
