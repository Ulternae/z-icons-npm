import React from 'react';

export function LanKeySkeletonLeftRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M608.5 128a96 96 0 1 0-192 0 96 96 0 1 0 192 0m32 0c0 70.7-57.3 128-128 128s-128-57.3-128-128h-96v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80c0-8.8 7.2-16 16-16h212c14.2-55.2 64.3-96 124-96 70.7 0 128 57.3 128 128m-608 256a96 96 0 1 0 192 0 96 96 0 1 0-192 0m-32 0c0-70.7 57.3-128 128-128s128 57.3 128 128h96v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v64h64v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v80c0 8.8-7.2 16-16 16h-212c-14.2 55.2-64.3 96-124 96-70.7 0-128-57.3-128-128"})
  );
}

export default LanKeySkeletonLeftRight;
