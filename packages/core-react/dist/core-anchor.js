import React from 'react';

export function CoreAnchor({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 0c53 0 96 43 96 96 0 41.8-26.7 77.2-64 90.4V448h32c70.7 0 128-57.3 128-128h-64v-64h128v64c0 106-86 192-192 192H192C86 512 0 426 0 320v-64h128v64H64c0 70.7 57.3 128 128 128h32V186.4c-37.3-13.2-64-48.6-64-90.4 0-53 43-96 96-96m0 64a32 32 0 1 0 0 64 32 32 0 1 0 0-64"})
  );
}

export default CoreAnchor;
