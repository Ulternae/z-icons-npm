import React from 'react';

export function CoreUserPlus({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M288 320c88.4 0 160 71.6 160 160v32h-64v-32c0-53-43-96-96-96H160c-53 0-96 43-96 96v32H0v-32c0-88.4 71.6-160 160-160zm284-124h68v56h-68v68h-56v-68h-68v-56h68v-68h56zm-348 60a128 128 0 1 1 0-256 128 128 0 1 1 0 256m0-192a64 64 0 1 0 0 128 64 64 0 1 0 0-128"})
  );
}

export default CoreUserPlus;
