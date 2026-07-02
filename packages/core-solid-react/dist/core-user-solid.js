import React from 'react';

export function CoreUserSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M288 320c88.4 0 160 71.6 160 160v32H0v-32c0-88.4 71.6-160 160-160zm-64-64a128 128 0 1 1 0-256 128 128 0 1 1 0 256"})
  );
}

export default CoreUserSolid;
