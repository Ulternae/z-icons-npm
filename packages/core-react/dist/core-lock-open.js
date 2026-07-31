import React from 'react';

export function CoreLockOpen({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128 128v64h192c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64v-64C64 57.3 121.3 0 192 0s128 57.3 128 128h-64c0-35.3-28.7-64-64-64s-64 28.7-64 64m128 128H64v192h256V256z"})
  );
}

export default CoreLockOpen;
