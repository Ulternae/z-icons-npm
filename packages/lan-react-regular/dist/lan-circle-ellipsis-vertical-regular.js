import React from 'react';

export function LanCircleEllipsisVerticalRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-32-64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
  );
}

export default LanCircleEllipsisVerticalRegular;
