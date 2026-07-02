import React from 'react';

export function CoreArrowRotateRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M399.1 128C363.9 88.7 312.8 64 256 64 150 64 64 150 64 256s86 192 192 192c76.5 0 142.7-44.8 173.5-109.7l57.8 27.5C446.3 452.1 358.2 512 256 512 114.6 512 0 397.4 0 256S114.6 0 256 0c76.5 0 145.1 33.5 192 86.7V0h64v160c0 17.7-14.3 32-32 32H320v-64z"})
  );
}

export default CoreArrowRotateRight;
